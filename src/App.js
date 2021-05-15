import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import HomePage from "./pages/homepage/homepage.component";
import Test from "./pages/counter/counter.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInSignUpPage from "./pages/sign-in-sing-up/sign-in-and-sign-up.component";
import { selectCurrentUser } from "./redux/user/user-selectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Checkout from "./pages/checkout/checkout.component";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    console.log("mounting app..");
  }, []);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/test" component={Test} />

        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
