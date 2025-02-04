import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';
import './index.css'

const SlidingLoginForm: React.FC = () => {
    const [isRightPanelActive, setIsRightPanelActive] = React.useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-950">
            <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''} relative w-[1280px] max-w-full min-h-[750px] bg-gray-900 rounded-[20px] overflow-hidden shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]`}>
                <div className={`sign-up absolute top-0 left-0 h-full w-1/2 opacity-0 z-1 transition-all ease-in-out duration-400 ${isRightPanelActive ? 'translate-x-full opacity-100 z-5' : ''}`}>
                    <form className="bg-gray-900 flex flex-col items-center justify-center p-[0_50px] h-full text-center text-white">
                        <h1 className="text-3xl font-bold m-2">Login</h1>
                        <div className="social-container my-4">
                            <a href="#" className="social h-[50px] w-[50px] mx-1 inline-flex justify-center items-center border border-gray-700 rounded-full hover:bg-gray-800">
                                <FacebookIcon className="text-white" />
                            </a>
                            <a href="#" className="social h-[50px] w-[50px] mx-1 inline-flex justify-center items-center border border-gray-700 rounded-full hover:bg-gray-800">
                                <GoogleIcon className="text-white" />
                            </a>
                            <a href="#" className="social h-[50px] w-[50px] mx-1 inline-flex justify-center items-center border border-gray-700 rounded-full hover:bg-gray-800">
                                <AppleIcon className="text-white" />
                            </a>
                        </div>
                        <p className="text-base font-thin leading-5 tracking-wider my-[5px]">or use your account</p>
                        <input type="email" placeholder="Email" required className="bg-gray-800 p-3 my-2.5 w-6/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                        <input type="password" placeholder="Password" required className="bg-gray-800 p-3 my-2.5 w-6/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                        <a href="#" className="text-gray-300 text-base no-underline my-[15px]">Forget your Password?</a>
                        <Link to="/dashboard">
                            <button className="text-white bg-[#ff4b2b] text-sm font-bold py-3 px-20 my-5 rounded-[20px] border border-[#ff4b2b] outline-none uppercase tracking-wider transition-transform duration-100 ease-in cursor-pointer active:scale-90">Sign In</button>
                        </Link>
                    </form>

                </div>
                <div className={`sign-in absolute top-0 left-0 h-full w-1/2 z-2 transition-all ease-in-out duration-400 ${isRightPanelActive ? 'translate-x-full' : ''}`}>
                    <form className="bg-gray-900 flex flex-col items-center justify-center p-[0_50px] h-full text-center text-white">
                        <h1 className="text-3xl font-bold m-2">Create Account</h1>
                        <div className="social-container my-4">
                            <a href="#" className="social h-[50px] w-[50px] mx-1 inline-flex justify-center items-center border border-gray-700 rounded-full hover:bg-gray-800">
                                <FacebookIcon className="text-white" />
                            </a>
                            <a href="#" className="social h-[50px] w-[50px] mx-1 inline-flex justify-center items-center border border-gray-700 rounded-full hover:bg-gray-800">
                                <GoogleIcon className="text-white" />
                            </a>
                            <a href="#" className="social h-[50px] w-[50px] mx-1 inline-flex justify-center items-center border border-gray-700 rounded-full hover:bg-gray-800">
                                <AppleIcon className="text-white" />
                            </a>
                        </div>
                        <p className="text-base font-thin leading-5 tracking-wider my-[5px]">or use your email for registration</p>
                        <input type="text" placeholder="Name" required className="bg-gray-800 p-3 my-2.5 w-6/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                        <input type="text" placeholder="CPF" required className="bg-gray-800 p-3 my-2.5 w-6/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                        <input type="email" placeholder="Email" required className="bg-gray-800 p-3 my-2.5 w-6/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                        <div className="flex w-6/8 justify-between space-x-2 my-2.5">
                            <input type="password" placeholder="Password" required className="bg-gray-800 p-3 w-4/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                            <input type="password" placeholder="Confirm Password" required className="bg-gray-800 p-3 w-4/8 rounded-[8px] border border-gray-700 outline-none text-white" />
                        </div>
                        <Link to="/dashboard">
                            <button className="text-white bg-[#ff4b2b] text-sm font-bold py-3 px-20 my-5 rounded-[20px] border border-[#ff4b2b] outline-none uppercase tracking-wider transition-transform duration-80 ease-in cursor-pointer active:scale-90">Sign Up</button>
                        </Link>
                    </form>

                </div>
                <div className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-400 z-100 ${isRightPanelActive ? '-translate-x-full' : ''} ${isRightPanelActive ? 'rounded-tr-[25px] rounded-br-[25px]' : 'rounded-tl-[25px] rounded-bl-[25px]'}`}>
                    <div className={`overlay relative text-white bg-[#ff416c] left-[-100%] h-full w-[200%] bg-gradient-to-r from-[#C63B20] to-[#C61A6D] transform transition-transform ease-in-out duration-400 ${isRightPanelActive ? 'translate-x-[50%]' : ''} ${isRightPanelActive ? 'rounded-tr-lg rounded-br-lg' : 'rounded-tl-lg rounded-bl-lg'}`}>
                        <div className={`overlay-right absolute flex flex-col items-center justify-center p-[0_40px] text-center top-0 h-full w-1/2 right-0 transform transition-transform ease-in-out duration-400 ${isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'} ${isRightPanelActive ? 'rounded-tr-lg rounded-br-lg' : 'rounded-tl-lg rounded-bl-lg'}`}>
                            <h1 className="text-2xl font-bold m-0">Welcome Back!</h1>
                            <p className="text-base font-light leading-5 tracking-wider my-[15px]">To keep connected with us please login with your personal info</p>
                            <button onClick={handleSignUpClick} className="text-white bg-transparent border-2 border-white text-sm font-bold py-3 px-20 my-5 rounded-[20px] outline-none uppercase tracking-wider transition-transform duration-100 ease-in cursor-pointer active:scale-90">Login</button>
                        </div>
                        <div className={`overlay-left absolute flex flex-col items-center justify-center p-[0_40px] text-center top-0 h-full w-1/2 transform transition-transform ease-in-out duration-400 ${isRightPanelActive ? 'translate-x-0' : '-translate-x-[20%]'} ${isRightPanelActive ? 'rounded-tr-lg rounded-br-lg' : 'rounded-tl-lg rounded-bl-lg'}`}>
                            <h1 className="text-2xl font-bold m-0">Hello, Friend</h1>
                            <p className="text-base font-light leading-5 tracking-wider my-[15px]">Enter your personal details and start journey with us</p>
                            <button onClick={handleSignInClick} className="text-white bg-transparent border-2 border-white text-sm font-bold py-3 px-20 my-5 rounded-[20px] outline-none uppercase tracking-wider transition-transform duration-100 ease-in cursor-pointer active:scale-90">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingLoginForm;