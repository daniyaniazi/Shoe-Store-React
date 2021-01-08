import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import Home from './Components/Home'
import About from "./Components/About";
import Products from "./Components/Products";
import Items from './Components/Items'
import NavBar from './Components/NavBar'

function RouterComponent() {
    return (
        <div className="">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/products/:id' component={Items} />
                    <Route path='*' component={() => <h1>404 PAGE NOT FOUND</h1>} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouterComponent;
