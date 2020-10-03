import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import "./style.css";
import { device } from "./mediaquery";

const Helyettesitokepek = [
  "https://up-magazine.info/wp-content/uploads/2019/10/virus-grippe.jpg",
  "https://images.theconversation.com/files/352606/original/file-20200812-14-8pkt2r.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C10210%2C4852&q=45&auto=format&w=496&fit=clip",
  "https://ichef.bbci.co.uk/news/410/cpsprodpb/13E61/production/_110450518_gettyimages-600999610.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCghTFSBs0P24mrz4BDmpXHzW3HUELfT16Qg&usqp=CAU",
];

const NewsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1fr);
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: hidden;
  padding: 50px 200px;
  grid-gap: 2em;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MainContainer = styled.div`
  width: 100%;
  padding-top: 50px;
`;

const Keppotlo = styled.div`
  height: 200px;
  background: url(${({ index }) => {
    return Helyettesitokepek[index % Helyettesitokepek.length];
  }});
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
    const kevesebb = this.state.articles.slice(0, 8);

    return (
      <MainContainer>
        <h1>News</h1>
        <NewsContainer>
          {kevesebb.map(({ title, media, link }, index) => (
            <Card style={{ width: "19rem" }}>
              {media ? (
                <Card.Img variant="bottom" src={media} />
              ) : (
                <Keppotlo index={index} />
              )}

              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary">
                  <a target="_blank" href={link}>
                    Read on website
                  </a>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </NewsContainer>
      </MainContainer>
    );
  }
}

export default News;
