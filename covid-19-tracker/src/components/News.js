import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import React, { Component } from "react";
import "./style.css";

const MainContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: papayawhip;
`;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
          "x-rapidapi-key":
            "fd6d434c58msh30ce0ba58cc05bdp1c23d9jsn0d57f877d589",
        },
      }
    )
      .then((response) => {
        response.json().then((json) => {
          console.log(json.articles);
          this.setState({
            articles: json.articles,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <MainContainer>
        {this.state.articles.map(({ title, summary, media }) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={media} />
            if
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{summary}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </MainContainer>
    );
  }
}

export default News;
