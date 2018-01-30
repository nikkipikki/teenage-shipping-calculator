import React from "react"
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 id="largeheader">teenage engineering shipping calculator</h1>
        <h1> total {this.props.productLength} products</h1>
      </div>
    )
  }

}

export default Header
