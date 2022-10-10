import {Routes, Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path={'/users'} element={<UsersPage/>}/>
              <Route path={'/posts'} element={<PostsPage/>}/>
              <Route path={'/comments'} element={<CommentsPage/>}/>
          </Route>
      </Routes>
  );
}

export default App;
