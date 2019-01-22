import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { storeConfig } from './storeConfig';
import App from "./components/App";

ReactDOM.render(
    <Provider store={storeConfig()}>
        <App />
    </Provider>,
    document.querySelector("#root")
);