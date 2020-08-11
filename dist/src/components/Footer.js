import React from 'react'

function Footer() {
    return (
        <div className="border-t">
            <p className="text-center py-5 text-sm text-gray-700 font-semibold"><span>&#64;</span>{new Date().getFullYear()} All Rights Reserved, <span className="text-teal-600">CapStone Inc</span></p>
        </div>
    )
}

export default Footer
