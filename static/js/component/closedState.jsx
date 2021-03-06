import React, { Component } from 'react';
import axios from "axios";

import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import cx from "classnames";
import CountUp  from 'react-countup';
import styles from "./closeState.module.css";


const apiEndpoint = "https://corona.lmao.ninja/v2/countries";
class ActiveState extends Component {
    state = {
        countries: [{country: ''}],
        totalDeaths: 0,
        totalRecoverd: 0
      };
      async componentDidMount() {
        const {data: countries} = await axios.get(apiEndpoint);
        this.setState({countries});
        this.totalWorldStat();   
      }
      totalWorldStat = () => {
        let i = 0;
        let totalDeaths = 0;
        let totalRecoverd = 0;
    
        const countries = [...this.state.countries];
        if(countries[0].country !== "WORLD"){
          while(i <= this.state.countries.length - 1){
            totalDeaths = totalDeaths + this.state.countries[i].deaths;
            totalRecoverd = totalRecoverd + this.state.countries[i].recovered;
            i++;
          }
        }else{
          totalDeaths = totalDeaths + this.state.countries[0].deaths;
          totalRecoverd = totalRecoverd + this.state.countries[0].recovered;
        }
        this.setState({totalDeaths, totalRecoverd});
      }


    render() { 
        const {totalDeaths, totalRecoverd} = this.state;
        const closedCases = totalDeaths + totalRecoverd;
        
        const recoverPercent = parseInt((100)-(totalDeaths/closedCases)*100);
        const deathPercent = 100 - recoverPercent;

        return (
          <div className={styles.container}>
            <Grid container spacing={13} justify="center">
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                      <Typography style={{fontSize: 25, marginBottom: 6, fontWeight: "bold",  whiteSpace: "nowrap"}} color="textSecondry" gutterBottom>CLOSED CASES:</Typography>
                      <Typography style={{fontSize: 25, marginBottom: 6,  whiteSpace: "nowrap"}} color="textSecondry" gutterBottom>Cases which had an outcome:</Typography>
                      <Typography  style={{fontSize: 20, marginBottom: 6, color: "blue"}}>
                          <CountUp start={0} end={closedCases} duration={3} separator="," />
                      </Typography>
                      <Typography style={{fontSize: 25, marginBottom: 6,  whiteSpace: "nowrap"}}  color="textSecondry" gutterBottom>Recovered / Discharged:</Typography>
                      <Typography style={{fontSize: 20, marginBottom: 6, color: "red"}}>
                          <CountUp start={0} end={totalRecoverd} duration={3} separator="," />
                      </Typography>
                      <Typography style={{fontSize: 25, marginBottom: 6,  whiteSpace: "nowrap"}} color="textSecondry" gutterBottom>Deaths:</Typography>
                      <Typography style={{fontSize: 20, marginBottom: 6, color: "green"}}>
                          <CountUp start={0} end={totalDeaths} duration={3} separator="," />
                      </Typography>
                  </CardContent>
              </Grid>
            </Grid>
          </div>
       );
    }
}
 
export default ActiveState;
