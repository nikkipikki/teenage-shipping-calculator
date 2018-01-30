import React from "react"
import "./style.css"
import Calculator from "../calculator"

class Chosenproducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      quantity: {}
    }
  }

toggleHidden = () => {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

handleInputQty = (event, productName) => {
  const values = {}
  values[productName] = event.target.value
  this.setState({
    quantity: { values }
  }, () => {
    console.log(this.state.quantity)
  })
}

  printNames = () => ((
    <div>
      {this.props.chosenProducts.map(product => (
        <div>
          <div className="nameandnumber">
            <p>{product.name}</p>
            <div>
              <input
                onChange={event => this.handleInputQty(event, product.name)}
                type="number"
                min="0"
                max="10" />
              {/* <button
                id="deletechosen"
                onClick={this.handleDeleteOne(name)}
                >X
              </button> */}
            </div>
          </div>
        </div>
        // </div>

      ))}
    </div>
  ))

  render() {
    return (
      <div>
        <div className="chosenproducts">
          <h1 className="chosenproductsheader">shipping products: {this.props.chosenProducts.length}</h1>
          <div className="printednames">
            <p>{this.printNames()}</p>
          </div>
          {/* <button id="deleteallchosen">trash</button> */}
          <div className="fromto">
            <select
              type="text"
              // value={this.state.category}
              // onChange={this.handleCategory}
              placeholder="category">
              <option value="" selected disabled hidden>from</option>
              <option
                value="china">CHINA
              </option>
              <option
                value="sweden">SWEDEN
              </option>
              <option
                value="unitedstates">UNITED STATES
              </option>
              <option
                value="worlwide">WORLD WIDE
              </option>
            </select>
            {/* <div
              className="fromtoicon" /> */}
            <select
              type="text"
              // value={this.state.category}
              // onChange={this.handleCategory}
              placeholder="category">
              <option value="" selected disabled hidden>to</option>
              <option
                value="china">CHINA
              </option>
              <option
                value="sweden">SWEDEN
              </option>
              <option
                value="unitedstates">UNITED STATES
              </option>
              <option
                value="worlwide">WORLD WIDE
              </option>
            </select>
          </div>
        </div>
        <div className="shipbuttoncontainer">
          <button className="shipbutton" onClick={this.toggleHidden} />
        </div>
        {!this.state.isHidden && <Calculator
          chosenProducts={this.props.chosenProducts} />}

      </div>
    )
  }
}

export default Chosenproducts
