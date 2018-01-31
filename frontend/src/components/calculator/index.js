import React from "react"
import "./style.css"

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      UpsUS: 0,
      UpsEU: 0,
      UpsWW: 0,
      FedexUS: 0,
      FedexEU: 0,
      FedexWW: 0
    }
  }

  printShip = () => ((
    <div>
      {this.props.values.map(p => (
        <div>
          <p>{p.name}</p>
          <p>{p.quantity}</p>
        </div>
      ))}
    </div>
  ))

  getVolume = name => {
    let findVolume = 0
    this.props.chosenProducts.map(product => {
      if (product.name === name) {
        findVolume = product.volume
      }
    })
    return findVolume
  }

  componentDidMount() {
    fetch("http://localhost:8080/calculate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        products: Object.keys(this.props.values).map(index => ({
          name: this.props.values[index].name,
          volume: this.getVolume(this.props.values[index].name),
          qty: this.props.values[index].quantity
        }))
      })
    }).then(response => {
      // var rsp = response.json()
      // console.log(rsp)
      return response.json()
    }).then(json => {
      console.log("Server Response...")
      console.log(json)
      this.calculateTotalShippingCost(json)
    })
  }

  calculateTotalShippingCost(shipping) {
    shipping.map(options => {
      options.shippingOptions.map(option => {
        if (option.upsUS) {
          this.setState({
            UpsUS: this.state.UpsUS + option.upsUS
          })
        } else if (option.upsEU) {
          this.setState({
            UpsEU: this.state.UpsEU + option.upsEU
          })
        } else if (option.upsWW) {
          this.setState({
            UpsWW: this.state.UpsWW + option.upsWW
          })
        } else if (option.FedexUS) {
          this.setState({
            FedexUS: this.state.FedexUS + option.FedexUS
          })
        } else if (option.FedexEU) {
          this.setState({
            FedexEU: this.state.FedexEU + option.FedexEU
          })
        } else if (option.FedexWW) {
          this.setState({
            FedexWW: this.state.FedexWW + option.FedexWW
          })
        } else {
          console.log("PANIK!?!?!")
          console.log(option.upsUS)
        }
      })
    })
    console.log(this.state.UpsUS)
    console.log(this.state.UpsEU)
    console.log(this.state.UpsWW)
    console.log(this.state.FedexUS)
    console.log(this.state.FedexEU)
    console.log(this.state.FedexWW)
  }

  render() {
    return (
      <div className="calculatedproducts">
        <h1>THE CALCULATOR</h1>
        <div className="printednames">
          <p>{this.printShip()}</p>
          <p>{this.state.UpsUS}</p>
        </div>
      </div>
    )
  }
}

export default Calculator
