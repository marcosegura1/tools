import React from 'react';
import './index.css';
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/configureStore";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>);

serviceWorker.unregister();
