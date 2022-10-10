import './App.css';
import {Route, Routes} from "react-router-dom";
import {CarsApiLayout, JsonplaceholderLayout, MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, PhotosPage, PostsPage, TodosPage, UsersPage} from "./pages";
import {localUrls} from "./configs";
import {JsonplaceholderHomePage} from "./pages";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>

                <Route path={localUrls.jsonplaceholder} element={<JsonplaceholderLayout/>}>
                    <Route index element={<JsonplaceholderHomePage/>}/>
                    <Route path={localUrls.users} element={<UsersPage/>}/>
                    <Route path={localUrls.posts} element={<PostsPage/>}/>
                    <Route path={localUrls.comments} element={<CommentsPage/>}/>
                    <Route path={localUrls.albums} element={<AlbumsPage/>}/>
                    <Route path={localUrls.photos} element={<PhotosPage/>}/>
                    <Route path={localUrls.todos} element={<TodosPage/>}/>
                </Route>

                <Route path={localUrls.carsApi} element={<CarsApiLayout/>}>

                </Route>

            </Routes>
        </div>
    );
}

export default App;
