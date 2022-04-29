import React from 'react'

function Intro() {
    return (
        <div className='flex justify-center items-center p-5 h-screen'>
            <div className='flex justify-center items-center space-x-10 '>
                <div className='w-[250px] h-[250px] rounded-full bg-slate-500 flex justify-center items-center'>Img</div>
                <div className='flex flex-col space-y-4'>
                    <p>We have seasoned mentors that will help you achieve all your goals</p>
                    <p>Get a mentor today and be glad you did</p>
                </div>
            </div>
        </div>
    )
}

export default Intro