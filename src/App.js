import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage} from "./pages";
import {CarsPage} from "./pages/carsPage/CarsPage";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/register'}/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Route>

            </Routes>

        </div>
    );
}

export default App;
