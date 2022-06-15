import '../src/App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ListNews from "./Components/ListNews/ListNews";

function App() {
  return (
    <BrowserRouter>
    <div className='GlobalContainer'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/list" element={<ListNews/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
