import React, { useEffect, useState } from 'react';

const ContentLeft = () => {
	return (
		<div className='z-10'>
			<h1 className='text-2xl text-center font-josef font-bold leading-1 md:text-8xl xxs:text-5xl mb-10'>
				Best <span className='text-yellow-500 font-josef font-bold '>NFT</span>s Giveaways <br />
			</h1>

			<div className='bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-4 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-3/5 sm:w-3/5 xxs:w-3/4 mx-auto '>
				<p className='text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
					Who said you have to spend a lot of money to have an amazinf NFT?<br />
					At Lucky NFT we offer you a revolutionary way to have NFTs with very little money.<br />
					A Draw!
				</p>
			</div>
			<div className='pt-4 mb-4'>
				<p className='text-center font-josef text-white  '>
					Each Friday a lottery will be run among the participants. Every week
					the NFT will be unique.
				</p>
			</div>
			<button onClick={()=>window.location.href='/lottery'}  type="button" className="text-center animate-bounce block font-josef bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl p-4 md:w-1/6 lg:w-1/4 sm:1/6 xxs:w-1/2 mx-auto mt-20 items-center">
				<svg className='inline mr-4' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>
				TRY YOUR LUCK!
			</button>
		</div>
	);
};

export default ContentLeft;
