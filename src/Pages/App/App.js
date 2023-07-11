import { useRoutes, BrowserRouter, HashRouter } from 'react-router-dom'
import { Home } from '../Home';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { MyProfile } from '../MyProfile';
import { MyOrder } from '../MyOrder';
import { NotFound } from '../NotFound';

import './App.css';
import { HomeContextProvider } from '../../Context/HomeContext';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/food', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/welfare', element: <Home />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-up', element: <SignUp />},
    {path: '/my-profile', element: <MyProfile />},
    {path: '/my-orders/last', element: <MyOrder /> },
    {path: '/my-orders/:id', element: <MyOrder /> },
    {path: '/*', element: <NotFound />}
  ]);

  return routes;
}


function App() {
  
  return (
    <>
        <HashRouter>
            <HomeContextProvider>
              <AppRoutes />
            </HomeContextProvider>
        </HashRouter>
    </>
  );
}

export { App }
export default App;
