import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

function App() {
  return (
    <>
      <Header></Header>
      <ItemListContainer greeting="Hola!"></ItemListContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
