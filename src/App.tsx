import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Artists } from "./pages/Artists/Artists";
import { CardInfo } from "./pages/CardInfo/CardInfo";
import { Contacts } from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { Products } from "./pages/Products/Products";
import { useScrollToTop } from "./shared/hooks";
import { items } from "./shared/projectData";

function App() {
    useScrollToTop();
    const location = useLocation().pathname;

    const cardsRoutesList = items.map((card) => {
        return (
            <CardInfo
                name={card.name}
                price={card.price}
                cardInfoMini1={card.cardInfoMini1}
                cardInfoMini2={card.cardInfoMini2}
                cardInfoMini3={card.cardInfoMini3}
                text1={card.text1}
                text2={card.text2}
            />
        );
    });

    const routesList = cardsRoutesList.map((page, index) => {
        const loc = location.split("/");
        const prevPage = loc[1] === "artists" ? "artists" : "products";
        return (
            <Route
                key={index}
                path={`/${prevPage}/item${index + 1}`}
                element={page}
            />
        );
    });

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/artists" element={<Artists />} />
                    {routesList}
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>

            {location !== "/" && <Footer />}
        </div>
    );
}

export default App;
