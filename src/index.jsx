import ReactDOM from 'react-dom';
import React from 'react';

// import './utils/chart';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

// import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(
    <HelmetProvider>
        <SidebarProvider>
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <App />
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </SidebarProvider>
    </HelmetProvider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
