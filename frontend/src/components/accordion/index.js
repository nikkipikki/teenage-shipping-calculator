import React from "react"

class Accordion extends React.Component {
  render() {
    return (
      <div>
        <p>number in pack:{this.props.product.numberInPack}</p>
        <p>number in innerpack:{this.props.product.numberInInnerPack}</p>
        <p>number in box:{this.props.product.numberInBox}</p>
        <p>number on pallet:{this.props.product.numberOnPallet}</p>
        {this.props.product.type}
        <p id="space">height</p>
        <p id="space">lenght</p>
        <p>dept</p>
        <p>{this.props.product.height}</p>
        <p>x</p>
        <p>{this.props.product.lenght}</p>
        <p>x</p>
        <p>{this.props.product.dept}</p>
        <p>cm</p>
        <p>{this.props.product.category}</p>
        <p>{this.props.product.id}</p>
        <p>{this.props.product.value}</p>
        <p>{this.props.product.descriptionHarmCode}</p>
        <p>{this.props.product.harmcode}</p>
      </div>
    )
  }
}

export default Accordion
