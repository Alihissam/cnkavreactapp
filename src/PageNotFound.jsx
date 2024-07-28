import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-black '>
            <h1 className='text-[100px] md:text-[200px] relative font-medium'>OOPS!</h1>
            <div className="absolute  md:mt-20 md:w-[500px] md:h-[50px] flex justify-center items-center
            md:text-[20px] font-normal md:tracking-widest 
            cantfound
            "
            >
                <h6>404 - THE PAGE CAN'T BE FOUND</h6>
            </div>
            <Link to="/">
                <div className=" w-[170px] md:w-[300px] text-white py-2 md:py-3 rounded-lg font-medium flex items-center justify-center mb-2 transition"
                    style={{
                        backgroundColor: "transparent",
                        border: "2px solid transparent",
                        borderImage: "linear-gradient(120deg, red, yellow) 1",
                    }}
                >
                    <span>GO TO HOMEPAGE</span>
                </div>
            </Link>
        </div>
    )
}

export default PageNotFound