import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';
import Vacancies from '../pages/vacancies';
import Vacancy from '../pages/vacancies/[vacancyId]';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Theme />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/:vacancyId" element={<Vacancy />} />
            <Route path="*" element={<NotFound />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
