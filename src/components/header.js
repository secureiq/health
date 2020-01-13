import { Link } from "gatsby"
import { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import Logo from "./logo.png"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#333 !important",
        }}
      >
        <Container>
          <Link to="/">
            <img width={100} src={Logo} />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <span className="nav-link">Home</span>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  {data.map(function(i, key) {
                    return (
                      <Link to={i.node.slug} key={key}>
                        <DropdownItem>{i.node.title}</DropdownItem>
                      </Link>
                    )
                  })}
                  <DropdownItem divider />
                  <DropdownItem>Other Products</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/contact-us">
                  <span className="nav-link">Contact Us</span>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
