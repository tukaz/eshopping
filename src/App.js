import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInSignUpPage from './pages/sign-in-sing-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.util';
import Header from './components/header/header.component'
import {Route,Switch,Redirect} from 'react-router-dom';

import './App.css';

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
  }
}

const mapStateToProps = ({user: {currentUser}}) => {
  return {
    currentUser
  }
}

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
    const {currentUser} = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route path="/shop" component={ShopPage}/>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/signin" render={()=> 
                currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage />)
            }/>

        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
