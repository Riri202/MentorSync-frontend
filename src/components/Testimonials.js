import React from 'react'
// import Grid from '@mui/material/Grid';


function Testimonials() {
    return (
        <div className='flex snap-x snap-mandatory overflow-scroll w-screen h-screen mx-auto'>

            {/* <h3 className='text-5xl mb-3 p-3'>See what our users have to say</h3> */}
            <div className='flex justify-center items-center space-x-10 my-auto h-screen w-screen p-10 flex-shrink-0 bg-yellow-400 snap-start'>
                <div className='w-[250px] h-[250px] rounded-full bg-slate-500 flex justify-center items-center'>Img</div>
                <div className='flex flex-col space-y-3 w-1/2 text-center'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,
                        tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.
                        Suspendisse ut erat massa. In ut risus massa. Nullam luctus, arcu id volutpat eleifend, massa nulla blandit velit,
                        ac congue nunc tortor a velit. Cras luctus tincidunt metus, ac dictum eros mollis a. Sed ac hendrerit turpis.
                        Nunc tincidunt tortor eget leo viverra vestibulum.
                    </p>
                    <p>-- Brenda Peters</p>
                </div>
            </div>

            <div className='flex justify-center items-center space-x-10 my-auto w-screen h-screen p-10 flex-shrink-0 bg-blue-300 snap-start'>
                <div className='w-[250px] h-[250px] rounded-full bg-slate-500 flex justify-center items-center'>Img</div>
                <div className='flex flex-col space-y-3 w-1/2 text-center'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,
                        tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.
                        Suspendisse ut erat massa. In ut risus massa. Nullam luctus, arcu id volutpat eleifend, massa nulla blandit velit,
                        ac congue nunc tortor a velit. Cras luctus tincidunt metus, ac dictum eros mollis a. Sed ac hendrerit turpis.
                        Nunc tincidunt tortor eget leo viverra vestibulum.
                    </p>
                    <p>-- Brenda Peters</p>
                </div>
            </div>

            <div className='flex justify-center items-center space-x-10 my-auto w-screen h-screen p-10 flex-shrink-0 bg-red-300 snap-start'>
                <div className='w-[250px] h-[250px] rounded-full bg-slate-500 flex justify-center items-center'>Img</div>
                <div className='flex flex-col space-y-3 w-1/2 text-center'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,
                        tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.
                        Suspendisse ut erat massa. In ut risus massa. Nullam luctus, arcu id volutpat eleifend, massa nulla blandit velit,
                        ac congue nunc tortor a velit. Cras luctus tincidunt metus, ac dictum eros mollis a. Sed ac hendrerit turpis.
                        Nunc tincidunt tortor eget leo viverra vestibulum.
                    </p>
                    <p>-- Brenda Peters</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials