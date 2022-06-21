import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import userContext from '../context/users/userContext'
import { useSelector, useDispatch } from 'react-redux'
import userContext from '../context/users/userContext';

const Navbar = () => {
    const context = useContext(userContext);
    const { logOut } = context;
    const navigator = useNavigate();
    const authToken = useSelector((state) => state.user.authToken)

    const logOutCall = () => {
        logOut();
        navigator("/");
        console.log(authToken);
    }
    // useEffect(() => {
    // }, [logOutCall])
    
    return (
        <div>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Notebook</span>
                    </a>
                    <div className="btn">
                        {authToken == '' ?
                            <div>
                                <Link to="/signup">
                                    <button type="button" class="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">  Signup</button></Link>
                                <Link to="/login" >   <button type="button" class="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Login</button></Link>
                            </div>
                            :
                            <div>
                                <button type="button" class="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={logOutCall}> Log Out</button>
                            </div>
                        } </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar