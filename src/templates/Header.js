import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/header-logo.png"

const Header = ({ siteTitle }) => (
  <header style={{
    backgroundColor: `#222`,
    textAlign: `center`,
    padding: `2rem 0`
  }}>
    <Link to="/">
      <img src={Logo} alt="Logo" style={{maxWidth: `480px`}} />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
