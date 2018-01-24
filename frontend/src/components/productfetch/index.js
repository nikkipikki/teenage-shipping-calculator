import React from "react"
import Products from "../products"
import "./style.css"

class Productfetch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/products").then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        product: json
      })
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.product.map((item) => {
            return <Products
              product={item} />
              // productIndividualId={item._id}
              // productCategory={item.category}
              // productId={item.id}
              // productSku={item.sku}
              // productName={item.name}
              // productType={item.type}
              // productHeight={item.height}
              // productLenght={item.lenght}
              // productDept={item.dept}
              // productNumberInPack={item.numberInPack}
              // productNumberInInnerPack={item.numberInInnerPack}
              // productNumberInBox={item.numberInBox}
              // productNumberOnPallet={item.numberOnPallet}
              // productImage={item.image}
              // productValue={item.value}
              // productDescriptionHarmCode={item.descriptionHarmCode}
              // productHarmcode={item.harmcode}/>
            })}
        </div>
      </div>

    )
  }

}

export default Productfetch
