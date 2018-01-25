import React from "react"
import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <div>
      HEADER
        <p>{this.props.product.sku}</p>
      </div>
    )
  }

}

export default Header
