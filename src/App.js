import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      covid_api : [],
      searchField : ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://corona.lmao.ninja/v2/countries?yesterday=true&sort=todayDeaths')
    .then(response => response.json())
    .then(todayDeaths => this.setState({ covid_api : todayDeaths }));
  }

  handleChange = e => {
    this.setState({ searchField : e.target.value });
  }
  
  render() {

    const { covid_api, searchField } = this.state;

    const filteredCountries = covid_api.filter(data =>
      data.country.toLowerCase()
      .includes(searchField.toLocaleLowerCase())
      );

    return (

      <div className="App">

        <h1 className="heading-1">COVID19 Update : Affected Countries</h1>

        <SearchBox 

          placeholder="Search Country" 
          handleChange={ this.handleChange }

        />

        <CardList  covid_api={ filteredCountries } />
       
    </div>
    )
  }
}

export default App;
