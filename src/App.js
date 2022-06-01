 import React from 'react';
 import LoginForm from "./components/LoginForm";
 import MainPage from './MainPage'
 import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
 import "../src/components/css/App.css";
 
 const App = () => {
     return (
         <Router>
         <div 
        //  className="ui container main-container"
         >
             <Routes>
                 <Route path="/" exact element = {<LoginForm />} />
                 <Route path="/index" exact element = {<MainPage />} />
            </Routes>
         </div>
         </Router>
     )
 }
 
 export default App
 