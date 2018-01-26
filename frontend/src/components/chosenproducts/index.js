import React from "react"
import "./style.css"

class Chosenproducts extends React.Component {

  printNames = () => {
    return (
      <div>
        {this.props.chosenNames.map(name => {
          return <p>{name}</p>
        })}
      </div>)
  }

  render() {
    return (
      <div className="chosenproducts">
        <h1 className="chosenproductsheader">CHOOSEN PRODUCTS: {this.props.chosenNames.length}</h1>
        <div className="printednames">
          <p>{this.printNames()}</p>
          <input
            type="text"
            placeholder="qty" />
          <select
            type="text"
            placeholder="boxes">
            <option value="" selected disabled hidden>box qty</option>
            <option
              value="1">1
            </option>
            <option
              value="2">2
            </option>
            <option
              value="3">3
            </option>
            <option
              value="4">4
            </option>
            <option
              value="5">5
            </option>
          </select>
        </div>
      </div>
    )
  }

}

export default Chosenproducts
