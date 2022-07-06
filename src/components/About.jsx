import React from 'react'

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-gray75 text-gray-300">
            <div className="flex flex-col justify-center items-center w full h full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-red-800">About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p> Hi, my name is Oscar, its a pleasure meeting you. Please browse through my Portfolio.</p>
                    </div>
                    <div>
                        <p>Full stack web development student at Arizona University. </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About