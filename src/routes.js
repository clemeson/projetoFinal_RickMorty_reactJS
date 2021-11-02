import React from "react";
import { Switch, Route} from "react-router-dom";

import Personagens from "./views/characters";
import Sobre from "./views/about";
import Location from "./views/location";
import Home from "./views/home";

 function Routes(){


            return(
                   
            
                         <Switch>

                              <Route path="/" exact component={Home} />
                              <Route path="/character" exact component={Personagens} />
                              <Route path="/location" exact component={Location} />
                              <Route path="/about" exact component={Sobre} />
                            
                        </Switch>

            )

}

export default Routes
