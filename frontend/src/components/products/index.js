import React from "react"
import "./style.css"
import Accordion from "../accordion"

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHiddenbox = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="productbox">
        <div className="name">

          <div className="checkboxpick">
            <input
              type="checkbox"
              id={this.props.product._id} />
            <label
              className="checkboxstyle"
              htmlFor={this.props.product._id}>
              <div>
                <h1>{this.props.product.name}</h1>
                <p>{this.props.product.sku}</p>
              </div>

              <div className="picturebox">
                <img
                  className="picture"
                  alt="produktbild"
                  src={this.props.product.image} />
              </div>

              <div className="informationbox">
                <button className="information" onClick={this.toggleHiddenbox}>
                  {!this.state.isHidden &&
                  <Accordion
                    product={this.props.product} />
                  }
                </button>
              </div>

            </label>
          </div>
        </div>
      </div>

    )
  }

}

export default Products
