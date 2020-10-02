import styled from "styled-components";
import React, { Component } from "react";
import "./style.css";
import { device } from "./mediaquery";

const MainContainer = styled.div`
  width: 100%;
  padding-top: 50px;
`;

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      confirmed: 0,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://covid-19-data.p.rapidapi.com/totals?format=json",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "fd6d434c58msh30ce0ba58cc05bdp1c23d9jsn0d57f877d589",
        },
      }
    );
    const json = await response.json();
    this.setState(json[0]);
  }

  render() {
    console.log("ez", this.state);
    const { critical, confirmed, deaths, recovered, lastUpdate } = this.state;
    return (
      <MainContainer>
        <h1>{critical}</h1>
        <h1>{confirmed}</h1>
        <h1>{deaths}</h1>
        <h1>{recovered}</h1>
        <h1>{lastUpdate}</h1>
      </MainContainer>
    );
  }
}

export default Stats;
