import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        if (username !== "agent123") {
            alert('Agent not found!');
        } else if (password !== "pass123") {
            alert('Password is wrong!');
        } else {
            navigate('/payment');
        }
    };

    return (
        <div id='login-pg'>
            <form id='login-form' onSubmit={handleLogin}>
                <div className='login-content'>
                    <h2>Welcome!</h2>
                    <p className='login-mssg'>We look forward to a healthy experience.</p>

                    <div className='field'>
                        <label htmlFor="username" className='login-labels'>Agent ID</label>
                        <input
                            className='login-feilds'
                            id='username'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password" className='login-labels'>Password</label>
                        <input
                            className='login-feilds'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className='button' type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
