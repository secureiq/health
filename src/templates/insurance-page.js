import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
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
import Background from "../../public/static/thailand.jpg"
const InsurancePage = ({ data }) => {
  console.log(data)
  const pageData = data.contentfulPages
  const products = data.allContentfulProducts.edges
  return (
    <Layout>
      <SEO title={pageData.title} />
      <Jumbotron style={{ backgroundImage: `url(${Background})` }}>
        <Container
          fluid
          style={{
            backgroundColor: "rgba(45, 92, 107, 0.9)",
            paddingTop: 75,
            paddingBottom: 75,
          }}
        >
          <Container>
            <h1 className="display-3">{pageData.title}</h1>
            <p className="lead">{pageData.subtitle}</p>
          </Container>
        </Container>
      </Jumbotron>
      <Container>
        {products ? (
          products.map(function(i, key) {
            return (
              <>
                <Row style={{ marginTop: 20 }}>
                  <Col key={key} md={3}>
                    {i.node.logo ? (
                      <img src={i.node.logo.resolutions.srcWebp} />
                    ) : null}
                    <h2 style={{ marginTop: 15 }}>{i.node.name}</h2>
                    <p>{i.node.subtitle}</p>
                  </Col>
                  <Col md={9}>
                    <Row style={{ marginBottom: 20 }}>
                      <Col md={12}>{i.node.description.description}</Col>
                    </Row>
                    <Row style={{ marginBottom: 20 }}>
                      <Col md={12}>
                        <b>{i.node.instructions}</b>
                      </Col>
                    </Row>
                    <Row>
                      {i.node.files
                        ? i.node.files.map(function(i, key) {
                            return (
                              <Col md={6}>
                                <Card style={{ marginBottom: 10 }}>
                                  <CardBody>
                                    <CardTitle>
                                      <b>{i.title}</b>
                                    </CardTitle>
                                    <CardSubtitle>
                                      {i.description ? i.description : null}
                                    </CardSubtitle>
                                    <a target="_blank" href={i.file.url}>
                                      <span className="card-subtitle">
                                        View >
                                      </span>
                                    </a>
                                  </CardBody>
                                </Card>
                              </Col>
                            )
                          })
                        : null}
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                      <Col>
                        <a target="_blank" href={i.node.applyLink}>
                          <Button color="success">
                            <b>
                              Apply Now{"  "}
                              <FontAwesomeIcon icon={faChevronCircleRight} />
                            </b>
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                <hr className="my-2" />
              </>
            )
          })
        ) : (
          <p>Content Needed</p>
        )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Page($slug: String) {
    contentfulPages(slug: { eq: $slug }) {
      title
      subtitle
    }
    allContentfulProducts(filter: { category: { eq: $slug } }) {
      edges {
        node {
          applyLink
          instructions
          id
          name
          subtitle
          description {
            description
          }
          logo {
            resolutions(width: 150) {
              srcWebp
            }
          }
          files {
            file {
              url
            }
            title
            description
          }
        }
      }
    }
  }
`
export default InsurancePage
