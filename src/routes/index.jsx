/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
// import Theme from 'Pages/Theme';
// import NotFound from 'Pages/NotFound';
// import Vacancies from '../pages/vacancies';
// import Vacancy from '../pages/Vacancies copy/[vacancyId]';

// const Routes = () => (
//     <BrowserRouter>
//         <Switch>
//             <Route path="/" element={<Theme />} />
//             <Route path="/vacancies" element={<Vacancies />} />
//             <Route path="/vacancies/:vacancyId" element={<Vacancy />} />
//             <Route path="*" element={<NotFound />} />
//         </Switch>
//     </BrowserRouter>
// );

// export default Routes;
// const Routes = () => (
//     <BrowserRouter>
//         <Switch>
//             <Route path="/" element={<Theme />} />
//             <Route path="/vacancies" element={<Vacancies />} />
//             <Route path="/vacancies/:vacancyId" element={<Vacancy />} />
//             <Route path="*" element={<NotFound />} />
//         </Switch>
//     </BrowserRouter>
// );

import React, { Suspense, lazy } from 'react';

import { Navigate } from 'react-router-dom';

import SuspenseLoader from '../components/atoms/SuspenseLoader';
import SidebarLayout from '../layouts/SidebarLayout';
import BaseLayout from '../layouts/BaseLayout';

const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />{' '}
        </Suspense>
    );
// Pages

// const Vacancy = Loader(lazy(() =>
//     import ('../pages/vacancies/[vacancyId]')));
// const Vacancy = Loader(lazy(() =>
//     import ('../pages/vacancies/[vacancyId]')));
const Vacancies = Loader(lazy(() => import('../pages/Vacancies')));
const Status404 = Loader(lazy(() => import('../pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('../pages/Status/Status500')));
const Dashboard = Loader(lazy(() => import('../dashboard')));
const StatusComingSoon = Loader(lazy(() => import('../pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('../pages/Status/Maintenance')));
const NotFound = Loader(lazy(() => import('../pages/Status/Status404')));

const routes = [
    {
        path: '/',
        element: <SidebarLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'vacancies',
                element: <Vacancies />,
            },
        ],
    },
];

export default routes;
