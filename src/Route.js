import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Hoc/Layout/Layout";
//COMPONENTS
import Home from "./Home";
import Collections from "./Components/NavbarRoutes/Collections/Collections";
import TShirts from "./Components/NavbarRoutes/TShirts/TShirts";
import Jeans from "./Components/NavbarRoutes/Jeans/Jeans";
import OurPP from "./Components/OurPP/OurPP";
import Polos from "./Components/NavbarRoutes/TShirts/AllTshirts/Polos/Polos";
import LongSleeves from "./Components/NavbarRoutes/TShirts/AllTshirts/Polos/Long-Sleeves/LongSleeves";
import ShortSleeves from "./Components/NavbarRoutes/TShirts/AllTshirts/Polos/ShortSleeve/ShortSleeve";
import Vneck from "./Components/NavbarRoutes/TShirts/AllTshirts/Polos/Vneck/Vneck";
import Cneck from "./Components/NavbarRoutes/TShirts/AllTshirts/Polos/CircleNeck/Cneck";
import ProductCard from "./Components/widgets/ShoppingCards/ProductCard/ProductCard";
import Cart from "./ShoppingCart/Cart";
import ProductList from "./Components/NavbarRoutes/Shirt/ProductList";
import ModalButton from "./Components/widgets/ModalButton/ModalButton";
import Default from "./Components/Default/Deafult";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/T-Shirts" exact component={TShirts} />
          <Route
            path="/online-shop&all-collections"
            exact
            component={Collections}
          />
          <Route path="/shirts" exact component={ProductList} />
          <Route path="/jeans" exact component={Jeans} />
          <Route path="/Exclusive-Products" exact component={OurPP} />
          <Route path="/polos" exact component={Polos} />
          <Route path="/LongSleeves" exact component={LongSleeves} />
          <Route path="/ShortSleeves" exact component={ShortSleeves} />
          <Route path="/Vneck" exact component={Vneck} />
          <Route path="/Circle-neck" exact component={Cneck} />
          <Route
            path="/ProductCard-add-to-cart"
            exact
            component={ProductCard}
          />
          <Route path="/Shopping-Cart" exact component={Cart} />
          <Route component={Default} />
        </Switch>
        <ModalButton />
      </Layout>
    );
  }
}

export default Routes;
