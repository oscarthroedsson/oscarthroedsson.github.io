import { Link } from "gatsby"
import React from "react"
import "./header.scss"
import logo from "./logo.png"

const Header = () => (
  <header>
    <div className="menu">
      <ul>
        <li>
          <a>Vision</a>
        </li>
        <li>
          <a>Priser & Paket</a>
        </li>
        <li>
          <a>
            <img src={logo} className="logo" />
          </a>
        </li>
        <li>
          <a>Om mig</a>
        </li>
        <li>
          <a>Kontakt</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
