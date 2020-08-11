import React, { Fragment, useState } from 'react'
import Navbar from '../components/Navbar'
import Caption from '../components/Caption'
import ScanSection from '../components/ScanSection'
import Footer from '../components/Footer'

import Loader from '../images/loader.gif'

function Home() {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
    }

    let content;

    if(loading){
        content = <div className="py-56 flex-grow">
            <img src={Loader} alt="loader" className="w-12 h-12 block mx-auto" />
        </div>
    }else{
        content = <div className="flex-grow">
            <Caption />
            <ScanSection handleSubmit={handleSubmit} />
        </div>
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Navbar />
            </div>
                {content}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
