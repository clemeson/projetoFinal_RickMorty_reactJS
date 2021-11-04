import React from "react";
import { Switch, Route} from "react-router-dom";
import Personagens from "./views/characters";
import Sobre from "./views/about";
import Location from "./views/location";
import Home from "./views/home";
import PageNotFound from './views/notfound/index'

 function Routes(){


            return(
                   
            
                         <Switch>

                              <Route path="/" exact component={Home} />
                              <Route path="/character"  component={Personagens} />
                              <Route path="/location"  component={Location} />
                              <Route path="/about"  component={Sobre} />
                              <Route path="*"  component={PageNotFound} />
                            
                        </Switch>

            )

}

export default Routes
