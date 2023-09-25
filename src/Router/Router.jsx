
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Donation from '../pages/Donation/Donation';
import Statistics from '../pages/Statistics/Statistics';
import CategoryDetails from '../components/CategoryDetails/CategoryDetails';

const Router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/category-details/:id',
                element:<CategoryDetails></CategoryDetails> ,
                loader: () => fetch('/data.json')
            },
        ]

    }
])

export default Router;