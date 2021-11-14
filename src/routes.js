import React, {useState}from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Personagens from "./views/characters";
import Sobre from "./views/about";
import GalleryComponent from "./views/about/Gallery";
import Location from "./views/location";
import Home from "./views/home";
import PageNotFound from './views/notfound/index'
import Forum from './views/forum/index'

 function Routes(){

      const [isLogged, setIsLogged]  = useState('')

            return(
                         <Switch>

                              <Route path="/" exact component={Home} />
                              <Route path="/home" exact component={Home} />

                              <Route path="/forum" >
                              {isLogged ? <Forum /> : <Redirect to="/login"/>}
                               </Route>
                              
                              


                              <Route path="/character"  exact component={Personagens} />
                              <Route path="/location" exact component={Location} />

                              <Route path="/about" exact component={Sobre} />
                              <Route path="/about/gallery" exact component={GalleryComponent} />

                              <Route path="*"  component={PageNotFound} />
                            
                        </Switch>
            )

}

export default Routes
