/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense, lazy } from 'react';

import { Navigate } from 'react-router-dom';

import BaseLayout from 'src/layouts/BaseLayout';
import SuspenseLoader from "Components/atoms/SuspenseLoader";
import SidebarLayout from "../layouts/SidebarLayout";

const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />{' '}
        </Suspense>
    );
// Pages

// const Vacancy = Loader(lazy(() =>
//     import ('../pages/vacancies/[vacancyId]')));
const Vacancies = Loader(lazy(() => import('../pages/Vacancies')));
const Status404 = Loader(lazy(() => import('../pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('../pages/Status/Status500')));
const Dashboard = Loader(lazy(() => import('../dashboard')));
const StatusComingSoon = Loader(lazy(() => import('../pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('../pages/Status/Maintenance')));
const NotFound = Loader(lazy(() => import('../pages/Status/Status404')));
const SingleVacancy = Loader(
    lazy(() => import("../pages/Vacancies/single")));
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
    children: [
      {
        path: '/',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Vacancies />
      },
      {
        path: 'single',
        children: [
          {
            path: '/',
            element: <Navigate to="1" replace />
          },
          {
            path: ':vacancyId',
            element: <SingleVacancy />
          }
        ]
      }
    ]
  }
        ],
    },
];

export default routes;
