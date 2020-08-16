import React from "react";
// import logo from './logo.svg';
// import './App.css';
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import Navbar from "./components/Navbar";
import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDvEEuVqK3aBTRoJNPserFWcE_DGZ2uUw4",
  authDomain: "savanah-f6d78.firebaseapp.com",
  databaseURL: "https://savanah-f6d78.firebaseio.com",
  projectId: "savanah-f6d78",
  storageBucket: "savanah-f6d78.appspot.com",
  messagingSenderId: "215539387383",
  appId: "1:215539387383:web:e578b8f1648d8d8738bcf2",
  measurementId: "G-VG99J6CJQH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Properties} />
        <Route exact path="/single-rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
