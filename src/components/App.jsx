import React, { Component } from "react";
import FilmCard from "./FilmCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmArr: [],
      displayLogo: true,
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

  handleClick() {
    this.setState({ displayLogo: false });
  }

  render() {
    if (this.state.displayLogo === true) {
      return (
        <div className="logoContainer">
          <div className="container-fluid logoContainer">
            <img
              className="col-8 mb-5"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
              alt="Stuid Ghibli Logo"
            />
          </div>
          <button onClick={() => this.handleClick()}>Load Films</button>
        </div>
      );
    } else {
      return <div id="filmContainer">{this.state.filmArr}</div>;
    }
  }
}

export default App;
