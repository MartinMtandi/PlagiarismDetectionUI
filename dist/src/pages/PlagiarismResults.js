import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResultsDocument from '../components/ResultsDocument'
import SideNavigation from '../components/SideNavigation'

function PlagiarismResults() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-8 container mx-auto my-8">
                <div className="col-span-5">
                    <ResultsDocument />
                </div>
                <div className="col-span-3">
                    <SideNavigation />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PlagiarismResults
