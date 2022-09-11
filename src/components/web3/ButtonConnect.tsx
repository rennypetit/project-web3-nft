import React from 'react';

const ButtonConnect = ({ connect, isUnsupportedChain }) => {
	return (
		<button
			onClick={connect}
			className='rfocus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
		>
			<span className='text-black font-bold'>
				{isUnsupportedChain ? 'Red no soportada' : 'Connect with Wallet'}
			</span>
		</button>
	);
};

export default ButtonConnect;
