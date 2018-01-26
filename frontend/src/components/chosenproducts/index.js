import React from "react"
import "./style.css"

class Chosenproducts extends React.Component {

  printNames = () => {
    console.log(this.props.chosenNames)
    return (
      <div>
        {this.props.chosenNames.map(name => {
          return <p>{name}</p>
        })}
      </div>)
  }

  render() {
    return (
      <div>
        <p>what are the chosen products{this.printNames()}</p>
      </div>
    )
  }

}

export default Chosenproducts
