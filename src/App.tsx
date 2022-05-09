import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import { NoMatch } from "./pages/NoMatch/NoMatch";

function App() {
    const location = useLocation().pathname;

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>

            {location !== "/" && <Footer />}
        </div>
    );
}

export default App;
