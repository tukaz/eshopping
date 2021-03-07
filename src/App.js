import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Login from './pages/sign-in-sing-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.util';
import Header from './components/header/header.component'
import {Route,Switch} from 'react-router-dom';

import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          );
        });
      } else {
        this.setState({currentUser:userAuth});
      }

    });
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
    this.unsubscribeFromAuth(); 
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/signin" component={Login}/>
            <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
