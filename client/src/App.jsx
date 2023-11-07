import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import MovieLists from "./pages/MovieLists";
import SidebarLayout from "./SidebarLayout";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./Layout";
import CinemaLists from "./pages/CinemaLists";
import SeatPage from "./pages/SeatPage";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import TicketProceedPage from "./pages/TicketProceedPage";
import PurchasedTicketPage from "./pages/PurchasedTicketPage";

const queryClient = new QueryClient();
axios.defaults.baseURL = "http://localhost:4000";
function App() {
  const router = createBrowserRouter([
    {
      path: "/movie",
      element: <SidebarLayout />,
      children: [
        {
          path: "/movie/all",
          element: <MovieLists />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetails />,
        },
        {
          path: "/movie/cinemas/:id",
          element: <CinemaLists />,
        },
        {
          path: "/movie/ticket",
          element: <PurchasedTicketPage />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/seats/:id/:roomId", element: <SeatPage /> },
        { path: "/proceed-ticket/:id/:roomId", element: <TicketProceedPage /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
