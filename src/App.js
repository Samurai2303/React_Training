import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
