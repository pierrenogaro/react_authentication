import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
    const navigate = useNavigate();
    const userEmail = localStorage.getItem('userEmail');
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            console.log('Token:', token);
        }
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
        navigate('/login');
    };

    if (!token) {
        return null;
    }

    return (
        <div>
            <h1>Bienvenue {userEmail}</h1>
            <button
                onClick={handleLogout}
                style={{
                    padding: '5px 10px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    marginTop: '10px'
                }}
            >
                Déconnexion
            </button>
        </div>
    );
};

export default Hello;
