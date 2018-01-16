import React from "react"
import Products from "./products"
import Newproduct from "./newproduct"
import Login from "./login"

class App extends React.Component {

  render() {
    return (
      <div>
        Find me in src/app.js!
        <Products />
        <Newproduct />
        <Login />
      </div>
    )
  }

}

export default App
