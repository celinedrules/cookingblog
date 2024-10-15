import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./styles/styles.scss"
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import ExploreCategories from "./pages/exploreCategories.jsx";
import CategoryPage from "./pages/categoryPage.jsx";

function App() {
    const [data, setData] = useState(
        {
            title: '',
            message: '',
            categories: [],
            food: {latest: [], thai: [], american: [], chinese: []}
        });

    useEffect(() => {
        if (data.title) {
            document.title = data.title;
        }
    }, [data.title])

    useEffect(() => {
        fetch('/api')  // Assuming you've proxied '/api' to the Express server
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home categories={data.categories} food={data.food}/>}/>
                    <Route path="/categories" element={<ExploreCategories/>}/>
                    <Route path="/categories/:categoryName" element={<CategoryPage />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
