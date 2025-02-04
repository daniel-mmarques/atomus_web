import React from "react";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
            {/* Header */}
            <header className="absolute top-4 right-4">
                <Link to="/sliding-form">
                    <button className="text-white bg-[#ff4b2b] text-sm font-bold py-3 px-5 rounded-[20px] border border-[#ff4b2b] outline-none uppercase shadow-lg tracking-wider transition-transform duration-100 ease-in cursor-pointer active:scale-90">Entre</button>
                </Link>
            </header>

            {/* Main Content */}
            <main className="text-center">
                <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Sistema</h1>
                <p className="text-lg text-gray-300">Gerencie suas informações com facilidade e segurança.</p>
            </main>
        </div>
    );
};

export default Home;
