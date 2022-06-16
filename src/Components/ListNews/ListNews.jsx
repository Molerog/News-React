import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";
const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);

  const llamarLink = (url) => {
    window.location.replace(url)
  }
  const article = news.map((element, i) => {
    return (
      <>
        {element.multimedia ? (
          <div className="NewsContainer" key={i}>
            <div className="NewsHeader">
              <h2>{element.title}</h2>
              <img src={element.multimedia[3].url} alt="pic" />
            </div>
            <h3 className="Abstract">{element.abstract}</h3>
            {/* <img src={element.multimedia[3].url} alt='pic'/> */}
            <span className='Date'>{element.published_date.slice(0,10)}</span>
            <h3 className='Byline'>{element.byline}</h3>
            {/* <a href={element.url}>Check this new</a> */}
            <button className='Button' onClick= {()=>llamarLink(element.url)}>
               Check this new
            </button>
          </div>
        ) : null}
      </>
    );
  });
  return <div className="MainContainer">{article}</div>;
};

export default ListNews;
