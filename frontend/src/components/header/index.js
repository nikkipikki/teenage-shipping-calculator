import React from "react"
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <div id="delete">
        <a href="#chosen">
          <div className="basketcontainer">
            <p className="basket"> added {this.props.chosenProducts.length} products</p>
          </div>
        </a>
        <div className="header">
          <h1 id="largeheader">shipping calculator</h1>
          <h1> total {this.props.productLength} products</h1>
        </div>
      </div>
    )
  }

}

export default Header
