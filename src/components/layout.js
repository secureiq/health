/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulPages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        data={data.allContentfulPages.edges}
      />

      {children}
      <Container fluid style={{ backgroundColor: "#2b2b2b" }}>
        <Container style={{ color: "#fff" }}>
          <Row style={{ paddingTop: 20, marginBottom: 20 }}>
            <Col md={4}>
              <b>Products</b>
              <br />
              {data.allContentfulPages.edges.map(function(i, key) {
                return (
                  <>
                    <Link to={i.node.slug}>
                      <span style={{ color: "#fff" }}>{i.node.title}</span>
                    </Link>
                    <br />
                  </>
                )
              })}
            </Col>
            <Col md={4}>
              <b>About Us</b>
            </Col>
            <Col md={4}>
              <b>Contact Us</b>
            </Col>
          </Row>
          <Row>
            © {new Date().getFullYear()}, Heath Insurace Travel | DEVELOPMENT
          </Row>
        </Container>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
