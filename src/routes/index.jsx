/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense, lazy } from 'react';

import { Navigate } from 'react-router-dom';

import SuspenseLoader from '../components/atoms/SuspenseLoader';
import SidebarLayout from '../layouts/SidebarLayout';

const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />{' '}
        </Suspense>
    );

const Vacancy = Loader(lazy(() => import('../pages/Vacancies/Vacancy')));
const Vacancies = Loader(lazy(() => import('../pages/Vacancies')));
const NotFound = Loader(lazy(() => import('../pages/Status/Status404')));
const routes = [
    {
        path: '/',
        element: <SidebarLayout />,
        children: [
            {
                path: '/vacancies',
                element: <Vacancies />,
                children: [
                    {
                        path: '/vacancies/:id',
                        element: <Vacancy />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
];

export default routes;
