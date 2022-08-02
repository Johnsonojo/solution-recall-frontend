import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AllPosts from "./pages/Post/allPosts";
import CreatePost from "./pages/Post/createPost";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/all-posts" element={<AllPosts />} />
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
