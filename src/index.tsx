import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import {router} from "./router";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
