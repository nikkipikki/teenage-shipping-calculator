import React from "react"
import "./style.css"

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // shipping: [],
      // amount: 0
    }

    this.props.values.map(p => {
      console.log(p.name)
      console.log(p.quantity)
    })
  }

  // componentDidMount() {
  //   fetch("http://localhost:8080/shipping").then(response => (
  //     response.json()
  //   )).then(json => {
  //     this.setState({
  //       shipping: json
  //     })
  //   })
  // }

  getVolume = name => {
    const volume = this.props.chosenProducts.map(product => {
      console.log(product)
      if (product.name === name) {
        return product.volume
      }
    })
    return volume
  }

  componentDidMount() {
    fetch("http://localhost:8080/calculate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        products: Object.keys(this.props.values).map(value => ({
          name: value.name,
          volume: 400, // this.getVolume(value.name)
          qty: value
        }))
      })
    }).then(response => {
      var rsp = response.json()
      console.log(rsp)
      return rsp
    }).then(json => {
      this.setState({ shipping: json })
    })
  }

  render() {
    return (
      <div className="calculatedproducts">
        <h1>THE CALCULATOR</h1>
      </div>
    )
  }
}

export default Calculator
