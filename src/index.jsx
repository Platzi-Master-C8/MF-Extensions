import ReactDOM from 'react-dom';
import React from 'react';

// import './utils/chart';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

// import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

ReactDOM.render(
    <HelmetProvider>
        <SidebarProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SidebarProvider>
    </HelmetProvider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
