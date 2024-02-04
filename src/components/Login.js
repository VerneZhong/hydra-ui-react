import React, { useState } from 'react';
import '../assets/styles/login.css';
import loginBg from '../assets/images/login-bg.png';

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        userName: 'admin',
        passWord: '',
        remember: false,
    });
    const [loading, setLoading] = useState(false);
    const [isShowSliderVerify, setIsShowSliderVerify] = useState(false);
    const [passwordType, setPasswordType] = useState('password');

    const handleLogin = () => {
        // 登录处理逻辑
        console.log('Handle login logic here');
    };

    const showPwd = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    return (
        <div className="view-box">
            <div className="bg-fox">
                <img src={loginBg} style={{ position: 'absolute', bottom: '8vh', left: '8vw', width: '450px' }} alt="Background" />
                {/* 三角形等装饰 */}
            </div>
            <div className="for-box">
                <div className="login-box">
                    <div className="from-box from-box-show">
                        <h3 className="from-title">Pandora management</h3>
                        <form>
                            <div className="el-form-item">
                                <input
                                    type="text"
                                    value={loginForm.userName}
                                    onChange={e => setLoginForm({ ...loginForm, userName: e.target.value })}
                                    placeholder="Please enter user name"
                                />
                            </div>
                            <div className="el-form-item">
                                <input
                                    type={passwordType}
                                    value={loginForm.passWord}
                                    onChange={e => setLoginForm({ ...loginForm, passWord: e.target.value })}
                                    placeholder="Please enter password"
                                />
                                <button onClick={showPwd}>Show/Hide Password</button>
                            </div>
                            <div className="el-form-item">
                                <button onClick={handleLogin}>Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '40px', width: '100%', textAlign: 'center', color: '#666' }}>
                    Copyright ©2024 | Hao Xu (許昊)
                </div>
            </div>
        </div>
    );
};

export default Login;
