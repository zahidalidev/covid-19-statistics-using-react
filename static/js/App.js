import "./App.css";
import React, {
    Component
} from "react";
import axios from "axios";
import _ from "lodash"
import SearcBox from './searchBox';
import Table from "./component/table";


const apiEndpoint = "https://corona.lmao.ninja/v2/countries";
class App extends Component {
    state = {
        countries: [{
            country: ''
        }],
        countrySerch: '',
        totalCases: 0,
        totalDeaths: 0,
        totalRecoverd: 0,
        totalActiveCases: 0,
        totalCriticalCases: 0,
        sortColumn: {
            path: 'cases',
            order: 'desc'
        },
    };

    async componentDidMount() {
        const {
            data: countries
        } = await axios.get(apiEndpoint);
        this.setState({
            countries
        });
        this.totalWorldStat();
    }
    countIndex = (country) => {
        return (_.findIndex(this.state.countries, country));
    }

    searchMovieFun = (countries) => {
        const {
            countrySerch
        } = this.state;
        const searchedCountry = countries.filter(count =>
            count.country.toLowerCase().startsWith(countrySerch.toLowerCase()) //return filtered movies according to search box value
        )
        return searchedCountry;
    }

    searchMovie = ({
        currentTarget: input
    }) => {
        this.setState({
            countrySerch: input.value
        })
    }

    totalWorldStat = () => {
        let i = 0;
        let totalCases = 0;
        let totalDeaths = 0;
        let totalRecoverd = 0;
        let totalActiveCases = 0;
        let totalCriticalCases = 0;


        const countries = [...this.state.countries];
        if (countries[0].country === "USA") {
            while (i <= this.state.countries.length - 1) {
                totalCases = totalCases + this.state.countries[i].cases;
                totalDeaths = totalDeaths + this.state.countries[i].deaths;
                totalRecoverd = totalRecoverd + this.state.countries[i].recovered;
                totalActiveCases = totalActiveCases + this.state.countries[i].active;
                totalCriticalCases = totalCriticalCases + this.state.countries[i].critical;
                i++;
            }
        } else {
            totalCases = this.state.countries[0].cases;
            totalDeaths = totalDeaths + this.state.countries[0].deaths;
            totalRecoverd = totalRecoverd + this.state.countries[0].recovered;
            totalActiveCases = totalActiveCases + this.state.countries[0].active;
            totalCriticalCases = totalCriticalCases + this.state.countries[0].critical;
        }
        this.setState({
            totalCases,
            totalDeaths,
            totalRecoverd,
            totalActiveCases,
            totalCriticalCases
        });
    }


    //sorting
    countrySort = () => {
        const countries = _.orderBy(this.state.countries, [this.state.sortColumn.path], [this.state.sortColumn.order])
        return countries;
        // this.setState({countries});
    }
    handleSort = sortColumn => {
        this.setState({
            sortColumn
        });

    }
    //<--------->


    render() {

        const countrySearched = this.countrySort()
        const countries = this.searchMovieFun(countrySearched);

        return ( <
            React.Fragment >
            <
            SearcBox onValue = {
                this.state.countrySerch
            }
            onAutoFocus = {
                false
            }
            onSearch = {
                this.searchMovie
            }
            goto = {
                this
            }
            /> <
            Table onCountries = {
                countries
            }
            onCountIndex = {
                this.countIndex
            }
            onSort = {
                this.handleSort
            }
            sortColumn = {
                this.state.sortColumn
            }
            /> <
            /React.Fragment>
        );
    }
}


export default App;