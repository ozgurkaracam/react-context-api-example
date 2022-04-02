import Navbarr from "./components/Navbar";
import {Route, Router, Routes} from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import Detail from "./pages/Detail";
import {Container} from "react-bootstrap";
import MainContext from "./context/context";


function App() {
    return (
        <MainContext>
            <Navbarr/>
            <Container>
                <Routes>

                    <Route exact element={<Search/>} path='/'></Route>
                    <Route exact element={<Search/>} path='/search'></Route>
                    <Route element={<Detail/>} path='/:id'></Route>

                    <Route element={<About/>} path='/about'></Route>
                </Routes>
            </Container>
        </MainContext>
    );
}

export default App;
