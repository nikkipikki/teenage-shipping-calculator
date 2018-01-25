import React from "react"
import Products from "../products"
import "./style.css"
import Header from "../header"

class Productfetch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/products").then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        product: json
      })
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.product.map((item) => {
            return <Products
              product={item} />
            })}
        </div>
      </div>

    )
  }

}

export default Productfetch
