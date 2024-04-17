import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { auth } from "../../views/Login/config";
import toast from 'react-hot-toast';

export default () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.clear();
            await auth.signOut();
            window.location.reload(); 
            toast.success("Logout Successful");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Reviews", path: "/review" },
        { title: "Contact", path: "/contact" },
        { title: "Pricing", path: "/pricing" }
    ]

    return (
        <nav className="bg-white border-b w-full md:static md:text-sm shadow-lg" id='navbar'  >
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <h1 className='text-2xl font-bold'>Smart Dustbin</h1>
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800" onClick={() => setState(!state)}>
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li key={idx} className="text-gray-700 font-semibold hover:text-green-600 cursor-pointer">
                                <Link to={item.path} className="block">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            {user ? (
                                <div className="flex items-center space-x-6">
                                    <Link to="/" className='flex items-center'>
                                        <img src={user.photoURL} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
                                        <span className="text-green-600">{user.displayName}</span>
                                    </Link>
                                    <li>
                                        <Link onClick={handleLogout} className="block py-2 px-4 font-medium text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow md:inline-block">
                                            Log Out
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                <li>
                                    <Link to="/login" className="block py-2 px-4 font-medium text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow md:inline-block">
                                        Log in
                                    </Link>
                                </li>
                            )}
                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
