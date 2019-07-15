import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyArT6AV4KTWKFaEIxfyexV01Uixld35LRM",
    authDomain: "forms-201dc.firebaseapp.com",
    databaseURL: "https://forms-201dc.firebaseio.com",
    projectId: "forms-201dc",
    storageBucket: "gs://forms-201dc.appspot.com",
    messagingSenderId: "30382318663",
    appId: "1:30382318663:web:307ab28886b17046"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<BrowserRouter>
    <Route path="/" component={App}/>
    </BrowserRouter>
, document.getElementById('root'));


serviceWorker.unregister();
