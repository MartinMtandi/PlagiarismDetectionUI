import React from 'react'
import Cite from '../images/EB-plagiarism-paper.png'

function ScanSection() {
    return (
        <div className="flex items-center container mx-auto pb-16">
            <div className="flex-grow-0">
                <img className="h-64" src={Cite} alt="Plagiarism Illustration-01" />
            </div>
            <div className="flex-grow">
                <div className="w-full border border-gray-400 rounded p-2">
                    <p className="text-gray-600 text-lg py-2 mx-2">Check your paper for plagiarism against billions of sources using CapStone Inc technology.</p>
                    <textarea className="w-full resize-none px-2 text-gray-800 focus:outline-none" rows="10" cols="50">
                    
                    </textarea>
                    <div className="flex items-center">
                        <button className="rounded block px-3 py-2 bg-teal-600 text-gray-100 hover:bg-teal-700">Check My Paper</button>
                        <div className="bg-grey-lighter mx-3">
                            <label className="flex items-center px-4 py-2 text-gray-100 bg-gray-700 rounded cursor-pointer">
                                <svg className="w-6 h-6 text-gray-100" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="text-base leading-normal mx-2">Select a file</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScanSection
