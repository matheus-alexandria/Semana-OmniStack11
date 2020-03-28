import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Switch garante que apenas uma rota seja executada por momento, mesmo com caminhos semelhantes
 */

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incident/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>  
    );
}