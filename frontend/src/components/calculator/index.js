import React from "react"
import "./style.css"

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shipping: [],
      amount: 0
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/shipping").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        shipping: json
      })
    })
  }

  // calculateShippingCost = () => ((
  //
  // ))

  render() {
    return (
      <div className="calculatedproducts">
        THE CALCULATOR
        {/* <p>{this.calculateShippingCost()}</p> */}
      </div>
    )
  }

}

export default Calculator
