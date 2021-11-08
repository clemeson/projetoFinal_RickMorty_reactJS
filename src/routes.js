import React from "react";
import { Switch, Route} from "react-router-dom";
import Personagens from "./views/characters";
import Sobre from "./views/about";
import GalleryComponent from "./views/about/Gallery";
import Location from "./views/location";
import Home from "./views/home";
import PageNotFound from './views/notfound/index'

 function Routes(){


            return(
                   
            
                         <Switch>

                              <Route path="/" exact component={Home} />
                              <Route path="/home" exact component={Home} />


                              <Route path="/character"  exact component={Personagens} />
                              <Route path="/character/location" exact component={Location} />

                              <Route path="/about" exact component={Sobre} />
                              <Route path="/about/gallery" exact component={GalleryComponent} />

                              <Route path="*"  component={PageNotFound} />
                            
                        </Switch>

            )

}

export default Routes
