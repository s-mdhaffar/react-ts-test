import Home from "./pages/home/Home";
import Listing from "./pages/listing/Listing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { getProducts } from "./redux/productSlice";
import { useEffect } from "react"
import Detail from "./pages/detail/Detail";




function App() {

  const dispatch=useAppDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const {data,loading}=useAppSelector((state)=>state)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={data} loading={loading} />,
    },
    {
      path: "/products",
      element: <Listing data={data} loading={loading} />,
    },
    {
      path: "/products/:id",
      element: <Detail data={data} loading={loading} />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
