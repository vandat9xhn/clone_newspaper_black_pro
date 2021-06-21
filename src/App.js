import React, { Component, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
import HeadMenu from './component/_head/_main/HeadMenu';
//

//
class App extends Component {
    //
    render() {
        //
        return (
            <Suspense fallback={<div></div>}>
                <BrowserRouter>
                    <header className="App_header w-100per">
                        <HeadMenu />
                    </header>

                    <Switch>
                        {Routes.map((item, ix) => (
                            <Route
                                key={`${ix}`}
                                component={item.component}
                                path={item.path}
                                exact={item.exact}
                            />
                        ))}

                        <Redirect to="/home" />
                    </Switch>

                    <footer>
                        <Foot />
                    </footer>
                </BrowserRouter>
            </Suspense>
        );
    }
}

export default App;
