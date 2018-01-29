import React from "react"
import "./style.css"

class Chosenproducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

// handleInputQty = event => {
//   this.setState({
//     quantity: event.target.value
//   })
// }
//
// handleDeleteOne = name => {
//   console.log(name)
//   // this.props.removeCallback(name)
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
