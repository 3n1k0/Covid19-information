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
      "https://covid-19-data.p.rapidapi.com/report/totals?date-format=YYYY-MM-DD&format=json&date=2020-07-21",
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
    console.log(this.state);
    const { critical, confirmed, deaths, recovered, date } = this.state;
    return (
      <MainContainer>
        <h1>Numbers from all over the world</h1>
        <p>
          Critical cases: <b>{critical}</b>
        </p>
        <p>
          Confirmed cases: <b>{confirmed}</b>
        </p>
        <p>
          Deaths: <b>{deaths}</b>
        </p>
        <p>
          Recovered: <b>{recovered}</b>
        </p>
        <p>
          Last update: <b>{date}</b>
        </p>
      </MainContainer>
    );
  }
}

export default Stats;
