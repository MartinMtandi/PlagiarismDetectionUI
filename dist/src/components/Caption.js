import React from 'react'
import Logo from '../images/capstoneLogo.png'

function Caption() {
    return (
        <div className="text-center py-12">
            <div className="flex items-center justify-center">
                <h1 className="text-4xl text-gray-800 font-semibold">Plagiarism Checker by </h1> 
                <img src={Logo} className="h-16 mx-4" alt="Logo" />
            </div>
            <p className="py-6 text-2xl text-gray-700 leading-8">CapStone Inc’s plagiarism checker detects plagiarism <span className="lg:block">in your text and checks for other writing issues.</span></p>
        </div>
    )
}

export default Caption
