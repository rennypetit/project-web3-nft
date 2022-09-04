import { createPublicKey } from 'crypto';
import React from 'react';

const Button = ({ text }) => {
	const click = () => {
		const box = document.getElementById('container');
		box.classList.remove('hidden');
		box.classList.add('block');
	}

	return (
				<button onClick={() => click()} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
					<span className="relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Start A Lottery
					</span>
				</button>
	);
};

export default Button;
