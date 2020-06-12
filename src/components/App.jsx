import React, { Component } from "react";
import FilmCard from "./FilmCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmArr: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((objArr) => {
        console.log(objArr);
        let newFilmArr = objArr.map((film) => (
          <FilmCard
            key={film.id}
            title={film.title}
            descr={film.description}
            url={film.url}
          />
        ));
        this.setState({ filmArr: newFilmArr });
        console.log(newFilmArr);
      });
  }

  render() {
    return <div id="filmContainer">{this.state.filmArr}</div>;
  }
}

export default App;
