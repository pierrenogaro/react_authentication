import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import Hello from "./pages/Hello.jsx";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                </nav>

                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/hello" element={<Hello />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;