import React from 'react'
import CardInput from '../components/CardInput';

export default function StartLottery() {
    	const HideIt = () => {
		const box = document.getElementById('container');
		box.classList.remove('block');
		box.classList.add('hidden');
	}
    return (
    <div className='fixed top-0 w-full z-40 h-screen backdrop-blur-sm hidden' id='container'>
        <div className='rounded-lg bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-pink-500/90 mx-auto 2xl:w-2/5 lg:w-1/2 md:w-11/22 sm:w-11/12 xxs:w-11/12 mt-20 xl:mt-40 p-10 flex justify-evenly flex-wrap'>
            <form action="" method="post" className='w-1/2 md:w-1/2 sm:w-1/2 xxs:w-full'>
                <label htmlFor="" className='block mb-5'>
                    Ticket Price
                    <input type="number" name="" id=""  className='ml-5 rounded-md'/>
                </label>
                <label htmlFor="" className='block mb-5'>
                    Lottery end:
                    <input type="datetime" name="" id="" className='ml-5 rounded-md'/>
                </label>
                <label htmlFor="" className='block mb-5'>
                    Give to Charity:
                <input type="checkbox" name="" id="" className='ml-20'/>
                </label>
                <label htmlFor="" className='block mb-5'>
                    Beneficiary:
                <input type="text" name="" id="" className='ml-5 rounded-md'/>
                </label>
                
                <label htmlFor="" className='flex justify-evenly'>
				<button type='submit' onClick={()=>console.log("Hello")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
					<span className="relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					AllOW
					</span>
				</button>
				<button type="button" onClick={()=>HideIt()} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
					<span className="relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Cancel
					</span>
				</button>
                </label>
            </form>
            <CardInput name={'Pikatchu'}/>
        </div>
    </div>
)
}
