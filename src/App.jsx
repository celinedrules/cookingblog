import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./styles/styles.scss"
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";

function App() {
    const [data, setData] = useState({title: '', message: '', categories:[]});

    useEffect(() => {
        // Set the document title when data.title is updated
        if (data.title) {
            document.title = data.title;
        }
    }, [data.title])

    useEffect(() => {
        // Fetch data from the Express API
        fetch('/api')  // Assuming you've proxied '/api' to the Express server
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home categories={data.categories} />}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
