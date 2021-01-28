import { Route, Switch } from 'react-router-dom';

import Home from './Screens/Home/index';
import Action from './Screens/Action/index';
import Horror from './Screens/Horror/index';
import Documentary from './Screens/Documentary/index';
import About from './Screens/About/index';


const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/action' component={Action}/>
            <Route path='/horror' component={Horror}/>
            <Route path='/documentary' component={Documentary}/>
            <Route path='/about' component={About}/>
        </Switch>
    );
}

export default Routes;