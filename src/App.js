import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/card";

function App() {
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  function fetchInfo(url) {
    try {
      setIsFetching(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPageInfo(data.info);
          setData(data.results);
        });
    } catch (error) {
      alert("hubo un problema buscando los datos");
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchInfo("https://rickandmortyapi.com/api/character");
  }, []);

  const onNextClick = () => {
    fetchInfo(pageInfo.next);
    setPageNumber(pageNumber + 1);
  };
  const onPrevClick = () => {
    fetchInfo(pageInfo.prev);
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <header className="App-header">Prueba Técnica React Developer</header>
      {!isFetching && (
        <div className="grid-container">
          {data.map((item) => (
            <Card
              title={item.name}
              status={item.status}
              location={item.location.name}
              image={item.image}
            />
          ))}
        </div>
      )}
      <div className="App-footer">
        {pageInfo.prev != null && (
          <button onClick={onPrevClick}>Anterior</button>
        )}
        <button disabled>{pageNumber} </button>
        {pageInfo.next !== null && (
          <button onClick={onNextClick}>Siguiente</button>
        )}
      </div>
    </div>
  );
}

export default App;
