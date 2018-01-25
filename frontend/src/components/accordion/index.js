import React from "react"
import "./style.css"

class Accordion extends React.Component {
  render() {
    return (
      <div className="attributes">
        {this.props.product.type}
        <p>category: {this.props.product.category}</p>
        <p>units:{this.props.product.numberInPack}</p>
        <p>innerpack:{this.props.product.numberInInnerPack}</p>
        <p>box:{this.props.product.numberInBox}</p>
        <p>pallet:{this.props.product.numberOnPallet}</p>
        <div className="measurments">
        <p>{this.props.product.height}</p>
        <p>x</p>
        <p>{this.props.product.lenght}</p>
        <p>x</p>
        <p>{this.props.product.dept}</p>
        <p>cm</p>
        </div>
        <p>value: {this.props.product.value}</p>
        <p>{this.props.product.descriptionHarmCode}</p>
        <p>harmcode: {this.props.product.harmcode}</p>
      </div>
    )
  }
}

export default Accordion
