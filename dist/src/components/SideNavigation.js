import React from 'react'
import CountUp from 'react-countup';

function SideNavigation() {
    let data = [
        {
            url: 'www.youtube.com',
            source: 'Internet',
            percentage: '12%'
        },
        {
            url: 'https://www.wikipedia.org/',
            source: 'Internet',
            percentage: '39%'
        },
        {
            url: 'https://stackoverflow.com/',
            source: 'Internet',
            percentage: '11%'
        },
        {
            url: 'https://www.webopedia.com/',
            source: 'Internet',
            percentage: '17%'
        },
        {
            url: 'https://www.theverge.com/tech',
            source: 'Internet',
            percentage: '22%'
        },
        {
            url: 'https://react-hook-form.com',
            source: 'Internet',
            percentage: '32%'
        },
        {
            url: 'https://www.w3schools.com/',
            source: 'Internet',
            percentage: '7%'
        },
    ]
    return (
        <div className="pl-8">
            <div className="border">
                <div className="py-2 bg-orange-900 text-center">
                    <h1 className="text-gray-100 font-semibold">Similarity Index</h1>
                </div>
                <div className="py-3 text-center">
                    <p className="text-5xl tracking-tight font-medium" style={{color: '#404041'}}> 
                    <CountUp end={76} /> %</p>
                </div>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center justify-between border-t py-2 px-5 cursor-pointer">
                                <div className="leading-tight">
                                    <p className="font-semibold text-orange-800">{item.url}</p>
                                    <p className="text-sm text-gray-700">{item.source}</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium">{item.percentage}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className=" pt-8">
                    <button className="text-white py-2 w-full" style={{backgroundColor: '#404041'}}>
                        Download Report
                    </button>
                </div>
        </div>
    )
}

export default SideNavigation
