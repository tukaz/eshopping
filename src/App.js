import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Login from './pages/sign-in-sing-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.util';
import Header from './components/header/header.component'
import {Route,Switch} from 'react-router-dom';

import './App.css';

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
  }
}
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
                id: snapShot.id,
                ...snapShot.data()
            }          
          )
        });
      } else {
        setCurrentUser(null)
      }

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/signin" component={Login}/>
            <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(App)
