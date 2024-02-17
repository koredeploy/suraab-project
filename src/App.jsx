import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from "./layout/rootlayout/RootLayout";
import HomePage from "./pages/home/HomePage";
import ServicePage from './pages/service/ServicePage';
import AboutPage from "./pages/about/AboutPage";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
    
      </Route>
    )
  )
function App() {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
