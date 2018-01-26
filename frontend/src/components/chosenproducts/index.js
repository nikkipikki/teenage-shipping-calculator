import React from "react"
import "./style.css"

class Chosenproducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: ""
    }
  }

// handleInputQty = event => {
//   this.setState({
//     quantity: event.target.value
//   })
// }
//
// handleDeleteOne = event => {
//   event.preventDefault()
//   this.setState({
//     quantity: ""
//   })
// }

  printNames = () => ((
    <div>
      {this.props.chosenNames.map(name => (
        <div>
          <div className="nameandnumber">
            <p>{name}</p>
            <div>
              <input
                type="number"
                min="0"
                max="10"
                // value={this.state.quantity}
                // onChange={this.handleInputQty}
                />
              <button
                id="deletechosen"
                onDelete={this.handleDeleteOne}>x
              </button>
            </div>
          </div>
        </div>
        // </div>

      ))}
    </div>
  ))

  render() {
    return (
      <div className="chosenproducts">
        <h1 className="chosenproductsheader">choosen products: {this.props.chosenNames.length}</h1>
        <div className="printednames">
          <p>{this.printNames()}</p>
        </div>
        {/* <button id="deleteallchosen">trash</button> */}
      </div>
    )
  }
}

export default Chosenproducts
