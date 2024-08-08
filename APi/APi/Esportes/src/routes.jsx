import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Container from './components/container.jsx'
import Home from './pages/home.jsx'
import Esportes from './pages/esportes.jsx'
import Futebol from './pages/futebolCronograma.jsx'
import Basquete from './pages/basqueteCronograma.jsx'
import Golf from './pages/golfCronograma.jsx'
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Container />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/esportes" element={<Esportes />}></Route>
                    <Route path="/futebol" element={<Futebol />}></Route>
                    <Route path="/basquete" element={<Basquete />}></Route>
                    <Route path="/golf" element={<Golf />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
