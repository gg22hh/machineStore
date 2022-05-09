import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Contacts } from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";

function App() {
    const location = useLocation().pathname;

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>

            {location !== "/" && <Footer />}
        </div>
    );
}

export default App;
