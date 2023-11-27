import './App.css';
import { UserContextProvider } from './UserContext';
import Layout from './layout';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostPage from './pages/PostPage';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />}/>
          <Route path="post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>  

  );
}

export default App;
