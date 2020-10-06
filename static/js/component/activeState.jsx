import React, { Component } from 'react';

import axios from "axios";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import cx from "classnames";
import CountUp  from 'react-countup';
import styles from "./activeState.module.css";


const apiEndpoint = "https://corona.lmao.ninja/v2/countries";

class ActiveState extends Component {
    state = {
        countries: [{country: ''}],
        totalActiveCases: 0,
        totalCriticalCases: 0
      };
      async componentDidMount() {
        const {data: countries} = await axios.get(apiEndpoint);
        this.setState({countries});
        this.totalWorldStat();   
      }
      totalWorldStat = () => {
        let i = 0;
        let totalActiveCases = 0;
        let totalCriticalCases = 0;
    
    
        const countries = [...this.state.countries];
        if(countries[0].country !== "WORLD"){
          while(i <= this.state.countries.length - 1){
            // if(i === 0){
            //   console.log(this.state.countries[i].active);
            //   console.log(this.state);
            // }
            totalActiveCases = totalActiveCases + this.state.countries[i].active;
            totalCriticalCases = totalCriticalCases + this.state.countries[i].critical;
            i++;
          }
        }else{
          totalActiveCases = totalActiveCases + this.state.countries[0].active;
          totalCriticalCases = totalCriticalCases + this.state.countries[0].critical;
        }
        this.setState({totalActiveCases, totalCriticalCases});
      }

    render() { 
        const {totalActiveCases, totalCriticalCases} = this.state;
        const midleCondition = totalActiveCases - totalCriticalCases;
        const midlePercent = parseInt((100)-(totalCriticalCases/totalActiveCases)*100);
        const criticalPercent = 100 - midlePercent;
        return ( 
          <div className={styles.container}>
          <Grid container spacing={13} justify="center">
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                      <Typography style={{fontSize: 25, marginBottom: 6, fontWeight: "bold",  whiteSpace: "nowrap"}} color="textSecondry" gutterBottom>ACTIVE CASES:</Typography>
                      <Typography style={{fontSize: 25, marginBottom: 6,  whiteSpace: "nowrap"}} color="textSecondry" gutterBottom>Currently Infected Patients:</Typography>
                      <Typography  style={{fontSize: 20, marginBottom: 6, color: "blue"}}>
                          <CountUp start={0} end={totalActiveCases} duration={3} separator="," />
                      </Typography>
                      <Typography style={{fontSize: 25, marginBottom: 6,  whiteSpace: "nowrap"}}  color="textSecondry" gutterBottom>In Mild Condition:</Typography>
                      <Typography style={{fontSize: 20, marginBottom: 6, color: "red"}}>
                          <CountUp start={0} end={midleCondition} duration={3} separator="," />
                      </Typography>
                      <Typography style={{fontSize: 25, marginBottom: 6,  whiteSpace: "nowrap"}} color="textSecondry" gutterBottom>Serious or Critical:</Typography>
                      <Typography style={{fontSize: 20, marginBottom: 6, color: "green"}}>
                          <CountUp start={0} end={totalCriticalCases} duration={3} separator="," />
                      </Typography>
                  </CardContent>
              </Grid>
          </Grid>
        </div>
      );
    }
}
 
export default ActiveState;
