import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons"
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardSubtitle,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Jumbotron>
      <Container
        fluid
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          paddingTop: 120,
          paddingBottom: 20,
        }}
      >
        <Container>
          <h1 className="display-3">Contact Us</h1>
        </Container>
      </Container>
    </Jumbotron>
    <Container>
      <p>Contact Form #TODO</p>
    </Container>
  </Layout>
)

export default SecondPage
