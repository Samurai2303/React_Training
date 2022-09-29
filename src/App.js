import './App.css';
import {Route, Routes} from "react-router-dom";
import {
    AlbumPage,
    CommentsPage,
    HeaderPage,
    HomePage,
    NotFoundPage,
    PhotosPage,
    PostsPage,
    TodosPage, UserAlbumsPage, UserPostsPage,
    UsersPage, UserTodosPage
} from "./pages";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HeaderPage/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/albums'} element={<AlbumPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/photos'} element={<PhotosPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/users/:id/posts'} element={<UserPostsPage/>}/>
                    <Route path={'/users/:id/albums'} element={<UserAlbumsPage/>}/>
                    <Route path={'/users/:id/todos'} element={<UserTodosPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
