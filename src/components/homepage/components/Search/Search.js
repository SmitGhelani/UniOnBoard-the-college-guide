import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Button,
  Row,
  Col,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Animation from "./Animation";
import "./Search.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            <div className="container ">
              <div>
                <div className="container py-5 searchleftside">
                  <h2 className="display-5 fw-bold pb-2 heading ">
                    Explore the Top Colleges in Gujarat
                  </h2>
                  <p className=" fs-6  para">
                    Our mission is to provide the best Colleges list and give
                    youth best offers for your study materials
                  </p>

                  <Animation />
                </div>
                {/* <div className="ui celled list">{renderedResults}</div> */}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="searchimg">
              <img
                style={{
                  backgroundImage: `url("./imgs/search/bgofsearch.png")`,
                }}
                className="searchimage  "
                src="./imgs/search/studentsearch.png"
                alt="Search image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
