import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <LoginForm />
        </div>
    );
};

export default Login;