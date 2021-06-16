import "../stylesheets/App.css";
import React from "react";
import FetchData from "../services/Api";
// import localStorage from "../services/LocalStorage";
import logo from "../images/Rick_Morty_logo.png";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      filterText: "",
    };
    this.handleFilterText = this.handleFilterText.bind(this);
  }

  componentDidMount() {
    if (this.state.result.length === 0) {
      FetchData().then((result) => {
        this.setState({ result: result });
      });
    }
  }

  handleFilterText(ev) {
    this.setState({
      filterText: ev.target.value,
    });
  }

  render() {
    // crear constante con un array que venga de filtrar el estado "this.state.result"
    let filterResult = this.state.result.filter((actor) => {
      return actor.name
        .toLowerCase()
        .includes(this.state.filterText.toLowerCase());
    });

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <div className="title">
              <img src={logo} className="images" alt="imagen" />
            </div>
            <Filters
              filterText={this.state.filterText}
              onFilterChange={this.handleFilterText}
            />
            <CharacterList characters={filterResult} />
          </Route>
          <Route
            exact
            path="/character/:id"
            render={(props) => (
              <CharacterDetail {...props} characters={this.state.result} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
