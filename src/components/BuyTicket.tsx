import React from 'react'

const BuyTicket = () => {
    return (
        <>
            <h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>
                Want to play?
            </h2>
            <h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>
                Buy ticket
            </h1>
            <div className='mt-10 flex flex-wrap'>
                <div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
                    <h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        CHOOSE
                    </h1>
                </div>
                <div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
                    <h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        BUY
                    </h1>
                    <button className='inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                        <span className=' px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                            Buy ticket
                        </span>
                        
                    </button>
                </div>
                <div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
                    <h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        BUY
                    </h1>
                </div>
            </div>
        </>
    )
}

export default BuyTicket