import React from "react"
import Productfetch from "./productfetch"
import Newproduct from "./newproduct"
import Login from "./login"
// import Header from "./header"
import Chosenproducts from "./chosenproducts"


class App extends React.Component {

  render() {
    return (
      <div>
        {/* Find me in src/app.js! */}
        {/* <Header /> */}
        <Productfetch />
        {/* <Newproduct /> */}
        {/* <Chosenproducts /> */}
        {/* <Login /> */}
      </div>
    )
  }

}

export default App
