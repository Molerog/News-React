import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import KEY from "../config";

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getNews = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${KEY}`
    );
    dispatch({
      type: "GET_NEWS",
      payload: res.data.results,
    });
    console.log(res.data.results);
  };
  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};