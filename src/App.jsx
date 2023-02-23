import { useEffect, useState } from "react";
import "./App.scss";

let nextId = 0;

function Row(props) {
  return (
    <div>
      _______________________
      <br />
      Testing Rows
      <h3>title test, {props.title}</h3>
      <li>description test, {props.description}</li>
      <br />
      End Testing Rows <br />
      _______________________
      <br />
      <br />
    </div>
  );
}

function handleChange(evt) {
  const value = evt.target.value;
  setFilm({
    ...film,
    [evt.target.name]: value,
  });
}

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["1", "543"]);
  const [film, setFilm] = useState({
    title: "Tytul1",
    description: "Opis1",
  });
  const renderList = list.map((item, index) => <div key={index}>{item}</div>);
  const [filmList, setFilmList] = useState([]);

  const removeNode = (idx) => {
    var filmListCopy = [...filmList];
    filmListCopy.splice(idx, 1); //remove the the item at the specific index
    setFilmList(filmListCopy);
  };

  const Test = ({ filmList }) => (
    <>
      {filmList.map((filmList, idx) => (
        <div key={idx} className="filmList">
          <h3>
            id:
            {idx} Title: {filmList.title}
          </h3>
          <li>Description: {filmList.description}</li>
          <br />
          <button onClick={() => removeNode(idx)}>Remove</button>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <input onChange={(e) => setCount(e.target.value)}></input>
      <br />
      <button
        onClick={() => {
          setList([...list, count]);
        }}
      >
        Print
      </button>
      <button
        onClick={() => {
          setList([]);
          console.log(list);
        }}
      >
        Reset
      </button>
      {renderList}
      <br />
      <Row title={film.title} description={film.description} />
      <input
        name="title"
        onChange={(e) => setFilm({ ...film, [e.target.name]: e.target.value })}
      ></input>
      <input
        name="description"
        onChange={(e) => setFilm({ ...film, [e.target.name]: e.target.value })}
      ></input>
      <br />
      <button
        onClick={() => {
          setFilmList([
            ...filmList,
            { id: nextId++, title: film.title, description: film.description },
          ]);

          console.log(filmList);
        }}
      >
        Print
      </button>
      <br />
      <br />
      <Test filmList={filmList} />
    </div>
  );
}

export default App;
