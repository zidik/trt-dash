import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
//import {AppContainer} from "react-hot-loader";
const { AppContainer } = require('react-hot-loader');
import {createStore, applyMiddleware, compose} from "redux";

import App from "./App";
import rootReducer from "./rootReducer";
import {updateFullState} from "./actions";
declare var window: { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
declare var module: { hot: any };

//Use DevTools version of compose, when extension is available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure store
const store = createStore(
    (rootReducer),
    composeEnhancers(
        applyMiddleware(
            //Middleware comes here
        )
    )
);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById("reactRenderRoot")
    );
};

//Initial Render
render();

// Hot Module Reload configuration
if (module.hot) {
    module.hot.accept("./App", render);
    module.hot.accept('./rootReducer', () => {
        store.replaceReducer(rootReducer);
    });
}

// Generation of state updates:
const sendStateUpdate = () => {
    const newState = generateNewFullState();
    const action = updateFullState(newState);
    store.dispatch(action);
}
setInterval(sendStateUpdate, 1000/50);

/**
 * Function for generating some sample data for illustration purposes
 */
const generateNewFullState = () => {
    const x = (Date.now()/1000)%(3.14*2);
    return {
        robots:[
            {
                globalPosition: {
                    x: 2 + 1.5* Math.sin(x),
                    y: 1.5 + Math.sin(x*2),
                    w:-x,
                },
                relativePosition: {
                    x: 0,
                    y: 0,
                    w: 0,
                }
            },
            {
                globalPosition: {
                    x: 2 + 1.5* Math.sin(x+1),
                    y: 1.5 + Math.sin((x+1)*2),
                    w:-x,
                },
                relativePosition: {
                    x: 1+ 1.5* Math.sin(x+1),
                    y:  Math.sin((x+1)*2),
                    w:-x,
                }
            }
        ],
        balls:[
            {
                globalPosition: {
                    x: 2 + 1* Math.sin(x+1),
                    y: 1.5 + Math.sin((x+1)*2)/2,
                },
                relativePosition: {
                    x: Math.sin(x+1),
                    y: Math.cos((x+1)*2)/2,
                }
            },
            {
                globalPosition: {
                    x: 2 + 1* Math.sin(x),
                    y: 1.5 + Math.sin((x)*2)/2,
                },
                relativePosition: {
                    x: Math.sin(x),
                    y: Math.cos((x)),
                }
            },
        ]
    }
}