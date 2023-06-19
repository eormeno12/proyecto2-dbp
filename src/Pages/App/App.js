import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { MyProfile } from '../MyProfile';
import { MyOrder } from '../MyOrder';
import { NotFound } from '../NotFound';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-up', element: <SignUp />},
    {path: '/my-profile', element: <MyProfile />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/*', element: <NotFound />}
  ]);

  return routes;
}


function App() {
  
  return (
    <>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </>
  );
}

export { App }
export default App;
