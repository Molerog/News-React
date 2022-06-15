import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './ListNews.scss'
const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  const article = news.map((element, i) => {
    return (     
      <div key={i}>
        <h2>{element.title}</h2>
        <span>{element.abstract}</span>
        {console.log(element)}
        {console.log(i)}
        {(element.multimedia)?<img src={element.multimedia[3].url} alt='pic'/>:null}
        {/* <img src={element.multimedia[3].url} alt='pic'/> */}
        <span>{element.published_date}</span>
        <span>{element.byline}</span>
        <a href={element.url}>Check this new</a>
      </div>
      
    );
  });
  return <div className = 'MainContainer'>{article}</div>;
};

export default ListNews;
