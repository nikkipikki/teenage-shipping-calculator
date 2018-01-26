import React from "react"
import Product from "../product"
import "./style.css"
import Header from "../header"
import Chosenproducts from "../chosenproducts"

class Productfetch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      products: [],
      chosenproducts: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/products").then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        products: json
      })
    })
  }

  addProductCallback = name => {
    this.setState({
      chosenproducts: [...this.state.chosenproducts, name]
    })
  }

  removeProductCallback = product => {
    this.setState(prevState => ({
      chosenproducts: this.removeFromChosenProducts(prevState, product)
    }))
  }

  removeFromChosenProducts = (prevState, product) => {
    prevState.chosenproducts.splice(prevState.chosenproducts.indexOf(product.name), 1)
    return prevState.chosenproducts
  }

  showTheChosenProducts = () => {
    this.setState(prevState => ({
      isHidden: !prevState
    }))
  }

  render() {
    return (
      <div>
        <Header
          productLength={this.state.products.length} />
        <div className="container">
          {this.state.products.map((product) => {
            return <Product
              product={product}
              chosenCallback={this.addProductCallback}
              removeCallback={this.removeProductCallback}
              onStatus={this.showTheChosenProducts} />
            })}
        </div>
        {!this.state.isHidden &&
          <Chosenproducts
            chosenNames={this.state.chosenproducts} />}
        <div className="shipbuttoncontainer">
          <button className="shipbutton" />
        </div>
      </div>

    )
  }

}

export default Productfetch
