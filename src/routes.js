import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Personagens from "./views/characters";
import Sobre from "./views/about";
import Location from "./views/location";
import Home from "./views/home";

 function Routes(){

        const LOCATION = useLocation()
            return(
                <CSSTransition key={LOCATION.key} classNames="transition">
               <TransitionGroup>
                         <Switch location={LOCATION}>
                            <Route path="/character" exact component={Personagens} />
                            <Route path="/" exact component={Home} />
                            <Route path="/location" exact component={Location} />
                            <Route path="/about" exact component={Sobre} />
                            
                        </Switch>
                        </TransitionGroup>
                    </CSSTransition>

            )

}

export default Routes
