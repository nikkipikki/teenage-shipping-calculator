import React from "react"
import "./style.css"

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // shipping: [],
      // amount: 0
    }
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

  componentDidMount() {
    fetch("http://localhost:8080/calculate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        products: Object.keys(this.props.values).map(productName => ({
          name: productName,
          volume: 400,
          qty: this.props.values[productName]
        }))
      })
    }).then(response => {
      return response.json()
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
