import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import covidLogo from "./images/covid-19.svg";
import maskLogo from "./images/mask.svg";
import socialLogo from "./images/social.svg";
import cleanLogo from "./images/clean.svg";

import { fetchCountries } from "./api";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AreaChart from "./components/AreaChart";
import Box from "@material-ui/core/Box";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "50px auto",
    width: "50%",
  },
}));

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["turkey"]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };

    fetchCountriesData();
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img
            src={covidLogo}
            alt="Covid19 Logo"
            style={{
              width: 100,
              height: 100,
              marginTop: 30,
              marginBottom: 70,
            }}
          ></img>

          <FormControl className={classes.formControl}>
            <Box textAlign="center" fontSize="20px" fontWeight="bold" style={{
              marginBottom: 20,
            }}>
              Select Country
            </Box>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((country) => (
                <MenuItem value={country.Slug}>{country.Country}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <AreaChart country={country}></AreaChart>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <img
            src={maskLogo}
            alt="Mask Logo"
            style={{
              width: 100,
              height: 100,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <img
            src={socialLogo}
            alt="Socail Logo"
            style={{
              width: 100,
              height: 100,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <img
            src={cleanLogo}
            alt="Clean Logo"
            style={{
              width: 100,
              height: 100,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
