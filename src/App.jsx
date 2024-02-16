import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from "./layout/rootlayout/RootLayout";
import HomePage from "./pages/home/HomePage";
import ServicePage from './pages/service/ServicePage';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
    
      </Route>
    )
  )
function App() {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
