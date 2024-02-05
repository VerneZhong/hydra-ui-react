import React, {useState} from 'react';
import '../assets/styles/login.css';
import backgroundImg from '../assets/images/login-bg.png';

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        userName: '',
        passWord: '',
        dragSuccess: false, // 用于模拟拖拽验证是否成功
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginForm.dragSuccess) {
            // 处理登录逻辑
            console.log('Login Success:', loginForm);
        } else {
            alert('Please complete the captcha verification!');
        }
    };

    const handleCaptchaSuccess = () => {
        // 模拟拖拽验证码验证成功
        setLoginForm({
            ...loginForm,
            dragSuccess: true,
        });
    };

    return (
        <div className="login-container" style={{backgroundImage: `url(${backgroundImg})`}}>
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={loginForm.userName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="passWord">Password</label>
                    <input
                        type="password"
                        id="passWord"
                        name="passWord"
                        value={loginForm.passWord}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* 这里应该是拖拽验证码组件，我们用一个按钮模拟 */}
                <button type="button" onClick={handleCaptchaSuccess}>
                    {loginForm.dragSuccess ? 'Verified' : 'Drag to verify'}
                </button>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
