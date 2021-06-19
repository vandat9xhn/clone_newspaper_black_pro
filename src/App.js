import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 
import './_style/root.scss';
import './_style/App.scss';
import './_style/display.scss';
import './_style/position.scss';
import './_style/properties.scss';
import './_style/classes.scss';
// 
import { Routes } from './__routes/_main';
import Foot from './component/_foot/_main/Foot';
// 


// 
class App extends Component {
    // 
    render() {
        // 
        return (
            <Suspense fallback={<div></div>}>
                <BrowserRouter>
                    <Switch>
                        {Routes.map((item, ix) => (
                            <Route
                                key={`${ix}`}
                                component={item.component}
                                path={item.path}
                                exact={item.exact}
                            />
                        ))}
                    </Switch>
                    
                    <foot>
                        <Foot />
                    </foot>
                </BrowserRouter>
            </Suspense>
        );
    }
}

export default App;