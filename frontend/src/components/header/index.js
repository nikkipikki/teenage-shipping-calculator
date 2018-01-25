import React from "react"
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>teenage engineering shipping calculator</h1>
        <p> Visar {this.props.productLength} produkter</p>
      </div>
    )
  }

}

export default Header
