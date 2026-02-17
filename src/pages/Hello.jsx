import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hello = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        console.log('Token:', token);

        const fetchHello = async () => {
            try {
                const response = await axios.get('https://backend.imatrythis.com/api/hello', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setMessage(response.data.message);

            } catch (error) {
                console.error('Erreur :', error);
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('userEmail');
                    navigate('/login');
                }
            }
        };

        fetchHello();

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
            <h1>{message || 'Chargement...'}</h1>
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
