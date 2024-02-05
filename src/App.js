import React from 'react';
import Login from './components/Login'
import logo from './assets/images/login-bg.png';

function App() {
    return (
        <div className="App">
            <main className="main">
                <div className="login-box">
                    <img src={logo} alt="Company Logo" className="login-logo"/>
                    <h2 className="login-title">Pandora management</h2>
                    <Login/>
                </div>
            </main>
            <footer className="footer">
                Copyright ©2024 | Hao Xu (許昊)
            </footer>
        </div>

    );
}

export default App;
