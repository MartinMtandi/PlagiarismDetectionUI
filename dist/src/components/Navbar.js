import React from 'react'

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-white p-4 container mx-auto">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="https://static.grammarly.com/assets/files/3a89d404f9db7ffd42e5fa9b8cd7d93e/grammarly_logo.svg" alt="Logo" />
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
                <button class="inline-block text-sm font-semibold uppercase px-4 py-2 leading-none border rounded text-gray-700 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</button>
                <button class="inline-block text-sm font-semibold uppercase px-4 py-2 leading-none hover:bg-teal-700 rounded text-gray-100 bg-teal-600 mt-4 lg:mt-0">Register</button>
            </div>
        </nav>
    )
}

export default Navbar
