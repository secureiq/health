import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSuitcaseRolling, faListAlt } from "@fortawesome/free-solid-svg-icons"
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"
import Layout from "../components/layout"
import Background from "../../public/static/bkk2.jpg"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const productCard = data.allContentfulPages.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron style={{ backgroundImage: `url(${Background})` }}>
        <Container
          fluid
          style={{
            backgroundColor: "rgba(224, 224, 224, 0.4)",
            paddingTop: 300,
            paddingBottom: 15,
          }}
        >
          <Container className="jumboHome">
            <h1
              className="display-3"
              style={{ textAlign: "right", fontWeight: "500" }}
            >
              Enjoy your stay
            </h1>
            <p className="lead" style={{ textAlign: "right" }}>
              In the land of smiles
            </p>
          </Container>
        </Container>
      </Jumbotron>
      <Container>
        <Row style={{ marginTop: 20 }}>
          <Col md={2} id="peace" style={{ textAlign: "right" }}>
            <h5
              style={{
                backgroundColor: "rgb(112, 217, 217)",
                padding: 7,
                color: "#fff",
                borderRadius: 5,
              }}
            >
              Health Insurance for your peace of mind
            </h5>
          </Col>
          {productCard.map(function(i, key) {
            return (
              <Col md={3} sm={4} xs={4}>
                <Card>
                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <b>{i.node.title}</b>
                    </CardTitle>
                    <h1 style={{ margin: 20 }}>
                      <FontAwesomeIcon icon={faSuitcaseRolling} />
                    </h1>

                    <Link to={i.node.slug}>
                      <Button color="secondary" outline>
                        <FontAwesomeIcon icon={faListAlt} />
                        {"   "}View Information
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Row style={{ marginTop: 40, marginBottom: 40 }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h2>Worry Free Insurance Plans</h2>
            <span className="p">Expats, Long Stay, Tourists</span>
          </Col>
        </Row>
        <Row id="benefit-icons">
          <Col md="3">
            <Card>
              <CardBody style={{ textAlign: "center" }}>
                <h1 style={{ margin: 20 }}>
                  <FontAwesomeIcon icon={faSuitcaseRolling} />
                </h1>
                <CardTitle>
                  <b>Benefit 1</b>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody style={{ textAlign: "center" }}>
                <h1 style={{ margin: 20 }}>
                  <FontAwesomeIcon icon={faSuitcaseRolling} />
                </h1>
                <CardTitle>
                  <b>Benefit 2</b>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody style={{ textAlign: "center" }}>
                <h1 style={{ margin: 20 }}>
                  <FontAwesomeIcon icon={faSuitcaseRolling} />
                </h1>
                <CardTitle>
                  <b>Benefit 3</b>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody style={{ textAlign: "center" }}>
                <h1 style={{ margin: 20 }}>
                  <FontAwesomeIcon icon={faSuitcaseRolling} />
                </h1>
                <CardTitle>
                  <b>Benefit 4</b>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 40, marginBottom: 40 }}>
          <Col md={12}>
            <h2 style={{ textAlign: "center" }}>
              What our Customers say about us
            </h2>
          </Col>
        </Row>
        <Row style={{ marginTop: 40, marginBottom: 40 }}>
          <Col md={4}>
            <p style={{ textAlign: "center", color: "#868686" }}>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis, lectus id dictum tristique, ex orci pellentesque
                odio, at lacinia massa ante et est. Proin pharetra ipsum vitae
                nibh ullamcorper iaculis. Cras vitae sagittis arcu, non faucibus
                risus. Vivamus porta felis ut posuere bibendum. Donec blandit
                lacus ac ipsum semper, eu tincidunt tellus iaculis. Suspendisse
                faucibus ullamcorper risus, in porttitor sapien commodo sed.
                Aliquam erat volutpat."
              </i>
              <br />- <b>Smithington</b>
            </p>
          </Col>
          <Col md={4}>
            <p style={{ textAlign: "center" }}>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis, lectus id dictum tristique, ex orci pellentesque
                odio, at lacinia massa ante et est. Proin pharetra ipsum vitae
                nibh ullamcorper iaculis. Cras vitae sagittis arcu, non faucibus
                risus. Vivamus porta felis ut posuere bibendum. Donec blandit
                lacus ac ipsum semper, eu tincidunt tellus iaculis. Suspendisse
                faucibus ullamcorper risus, in porttitor sapien commodo sed.
                Aliquam erat volutpat."
              </i>
              <br />- <b>Frankenstein</b>
            </p>
          </Col>
          <Col md={4}>
            <p style={{ textAlign: "center", color: "#868686" }}>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis, lectus id dictum tristique, ex orci pellentesque
                odio, at lacinia massa ante et est. Proin pharetra ipsum vitae
                nibh ullamcorper iaculis. Cras vitae sagittis arcu, non faucibus
                risus. Vivamus porta felis ut posuere bibendum. Donec blandit
                lacus ac ipsum semper, eu tincidunt tellus iaculis. Suspendisse
                faucibus ullamcorper risus, in porttitor sapien commodo sed.
                Aliquam erat volutpat."
              </i>
              <br />- <b>Smithington</b>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Products {
    allContentfulPages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export default IndexPage
