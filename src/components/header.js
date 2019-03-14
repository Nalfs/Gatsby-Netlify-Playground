import React from 'react'
import './styles.css';
import { Link } from "gatsby"

const Header = () => (
    <div className="wrapper">
    <div className="header">
    <div className="knockout"><a href="http://mksht.crisnoble.com" rel="Like cool shit? visit my site">gatsby filth</a></div>

</div>
<div className="topnav">
    <Link className="active" to="/">Home</Link>
    <a href="#news">News</a>
    <Link to="/contactForm/">Contact</Link>
    <Link to="/about/">About</Link>
</div>
              </div>
)

export default Header