import React from "react"
import "./style.css"

class Products extends React.Component {
  render() {
    return (
      <div className="productbox">
        <div className="name">
          <h1>{this.props.productName}</h1>
          <p>{this.props.productSku}</p>
        </div>

        <div className="hoverbox">

          <div className="description">{this.props.productType}
            <div className="typemeasurment">
              <p id="space">height</p>
              <p id="space">lenght</p>
              <p>dept</p>
            </div>

            <div className="measurments">
              <p>{this.props.productHeight}</p>
              <p>x</p>
              <p>{this.props.productLenght}</p>
              <p>x</p>
              <p>{this.props.productDept}</p>
              <p>cm</p>
            </div>

            <p>{this.props.productCategory}</p>
            <p>{this.props.productId}</p>
            <p>{this.props.productValue}</p>
            <p>{this.props.productDescriptionHarmCode}</p>
            <p>{this.props.productHarmcode}</p>
          </div>

          <div className="picturebox">
            <img className="picture" alt="produktbild" src={this.props.productImage} />
          </div>

          <p>number in pack:{this.props.productNumberInPack}</p>
          <p>number in innerpack:{this.props.productNumberInInnerPack}</p>
          <p>number in box:{this.props.productNumberInBox}</p>
          <p>number on pallet:{this.props.productNumberOnPallet}</p>

        </div>
      </div>

    )
  }

}

export default Products
