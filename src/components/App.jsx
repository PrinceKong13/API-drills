import React, { Component } from "react";
import FilmCard from "./FilmCard";
import PersonCard from "./PersonCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoArr: [],
      displayLogo: true,
    };
  }

  handleClickFilms() {
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
        this.setState({ infoArr: newFilmArr });
        console.log(newFilmArr);
      });
    this.setState({ displayLogo: false });
  }

  handleClickPeople() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((objArr) => {
        console.log(objArr);
        let newPersonArr = objArr.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            age={person.age}
            gender={person.gender}
            url={person.url}
          />
        ));
        this.setState({ infoArr: newPersonArr });
        console.log(newPersonArr);
      });
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
          <button className="mr-5" onClick={() => this.handleClickFilms()}>
            Load Films
          </button>
          <button onClick={() => this.handleClickPeople()}>Load People</button>
        </div>
      );
    } else {
      return <div id="filmContainer">{this.state.infoArr}</div>;
    }
  }
}

export default App;
