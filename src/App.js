import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AllPosts from "./pages/Post/allPosts";
import CreatePost from "./pages/Post/createPost";
import EditPost from "./pages/Post/editPost";
import SinglePost from "./pages/Post/singlePost";
import SearchPost from "./pages/Search";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute user={user?.id} />}>
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/all-posts" element={<AllPosts />} />
              <Route path="/post/:postId" element={<SinglePost />} />
              <Route path="/edit-post/:postId" element={<EditPost />} />
              <Route path="/posts/search" element={<SearchPost />} />
            </Route>
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
