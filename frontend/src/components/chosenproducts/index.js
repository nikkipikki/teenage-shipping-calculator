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
        <p>CHOOSEN PRODUCTS{this.printNames()}</p>
      </div>
    )
  }

}

export default Chosenproducts
