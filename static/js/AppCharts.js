import React, {
    Component
} from 'react';
import Cards from "./Cards/Cards"
import Chart from './Charts/Charts';
import CountryPicker from './CountryPicker/CountreyPicker';
import styles from "../src/App.module.css";
import {
    fetchData
} from './api/indexAPI';


class App2 extends Component {
    state = {
        data: {},
        country: ""
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        });
    }

    render() {
        const {
            data,
            country
        } = this.state;
        return ( <
            div className = {
                styles.container
            } >

            { /* <img src={coronaImage} alt="COVID-19" className={styles.image}></img> */ } <
            Cards data = {
                data
            }
            /> <
            CountryPicker handleCountryChange = {
                this.handleCountryChange
            }
            /> <
            Chart data = {
                data
            }
            country = {
                country
            }
            /> <
            /div>
        );
    }
}

export default App2;