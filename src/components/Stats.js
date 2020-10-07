import styled from "styled-components";
import React, { Component } from "react";
import "./style.css";
import { device } from "./mediaquery";

const MainContainer = styled.div`
  padding-bottom: 100px;
  padding-top: 50px;
  background: #008891;

  h1 {
    padding-bottom: 50px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  font-family: "Open Sans";
  background: white;

  height: 500px;
  max-width: 500px;
  position: relative;
  margin: 0 auto;
  border-radius: 20%;
  display: grid;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  padding: 20px;

  p {
    font-size: 2em;
  }
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
        <InfoContainer>
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
        </InfoContainer>
      </MainContainer>
    );
  }
}

export default Stats;
