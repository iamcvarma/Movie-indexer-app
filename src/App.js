import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!search) return;
    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.React_App_apikey}&s=${search}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.Search));
  }, [search]);

  return (
    <>
      <div className="container">
        <h1>Movie Search</h1>
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="searchBox"
        />
      </div>
      <div className="result--container">
        {data && data.map((movie) => <Card key={movie.imdbID} {...movie} />)}
      </div>
    </>
  );
}

export default App;
