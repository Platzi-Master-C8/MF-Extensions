import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import Extensions from 'Pages/Extensions';
import NotFound from 'Pages/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Theme />} />
            <Route path="/extensions" element={<Extensions />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
