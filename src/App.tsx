import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Contacts } from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
