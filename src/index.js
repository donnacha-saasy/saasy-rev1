import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.js";
// import Quote from "./components/Quote.js";
// import Quote1 from "./components/Quote1.js";
import HouseType from "./quote/HouseType";
import Grants from "./components/Grants.js";
import FAQs from "./components/FAQs.js";
// import Quotes from "./pages/quote.js";
import { Redirect } from "react-router";
import ServicesPage from "./components/ServicesPage.js";
import store from "./app/Store";
import { Provider } from "react-redux";
import Powerflushing from "./components/Powerflushing.js";
import ThankYou from "./components/ThankYou.js";
import Thanks from "./components/Thanks.js";
import Register from "./quote/Register";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        {/* <Route path='/quote' component={Quote} /> */}
        {/* <Route path='/quote1' component={Quote1} /> */}
        <Route path="/get-quote" component={HouseType} />
        <Route path="/grants" component={Grants} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/powerflushing" component={Powerflushing} />
        <Route path="/powerflush-thanks" component={ThankYou} />
        <Route path="/thanks" component={Thanks} />

        <Redirect from="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
