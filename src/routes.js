import React from "react";
import { Switch, Route} from "react-router-dom";
import Personagens from "./views/characters";
import Sobre from "./views/about";
import GalleryComponent from "./views/about/Gallery";
import Location from "./views/location";
import Home from "./views/home";
import PageNotFound from './views/notfound/index'
import Login from "./views/login";
import CadastreSe from "./views/login/cadastro";


 function Routes(){


            return(
                         <Switch>

                              <Route path="/" exact component={Home} />
                              <Route path="/home" exact component={Home} />


                              <Route path="/character"  exact component={Personagens} />
                              <Route path="/location" exact component={Location} />

                              <Route path="/about" exact component={Sobre} />
                              <Route path="/about/gallery" exact component={GalleryComponent} />

                              <Route path='/login' exact component={Login}/>
                              <Route path='/cadastre-se' exact component={CadastreSe}/>


                              <Route path="*"  component={PageNotFound} />
                            
                        </Switch>
            )

}

export default Routes
