import React from "react"
import "./style.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        <h1>teenage engineering shipping calculator</h1>
        <p> Visar ... {this.props.length} produkter</p>
      </div>
    )
  }

}

export default Header
