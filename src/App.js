import {useEffect, useState } from "react";
import Header from "./Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react'
import CountryPicker from "./CountryPicker";
import { makeStyles } from '@material-ui/core/styles';
import InfoBox from "./InfoBox";
import PiChart from "./PieChart"


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    textAlign: 'center'
},
}));


function App() {

  const classes = useStyles();

  let [data, setData] = useState({});

  async function getGlobalData() {
    let response = await fetch("https://disease.sh/v3/covid-19/all");
    let json = await response.json();
    setData(extractData(json))
    
  }

  async function getCountryData(country) {
    let url = "https://disease.sh/v3/covid-19/countries/" + country;
    console.log(url);
    let response = await fetch(url)
    let json = await response.json();
    setData(extractData(json))
    
  }

  function extractData(json){
    return {
      lastUpaded: json.updated,
      list: [
        {title: "Total Cases", count: json.cases, color:"#FFCE56"},
        {title: "Total Deaths", count: json.deaths, color:"#FF6384"},
        {title: "Total Recoveries", count: json.recovered, color:"#36A2EB"}
      ],
    }
  }


  useEffect(() => {
    getGlobalData();
    
  },[])


  return (
    <React.Fragment >
      <CssBaseline />

      <div className={classes.root}>
      <Header/>

      

      <CountryPicker handleChange={(country) => {
          console.log("Value: " + country);
          if(country === ""){
            getGlobalData();
          }else{
            getCountryData(country);
          }

      }}/>

    <InfoBox data={data}/>
    <PiChart data={data}/>

    </div>

    </React.Fragment>

  );
}

export default App;
