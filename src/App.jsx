import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/rootlayout/RootLayout";
import HomePage from "./pages/home/HomePage";
import ServicePage from "./pages/service/ServicePage";
import ContactUsPage from "./pages/contact/ContactUsPage";
// import FadedCarousel from "./layout/sharedLayout/fadedCarousel/FadedCarousel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      {/* <Route path="/carousel" element={<FadedCarousel  />} /> */}
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="*" element={<HomePage/>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
