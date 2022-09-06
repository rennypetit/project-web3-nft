import { createPublicKey } from 'crypto';
import React from 'react';

const Button = ({ text }) => {
	const click = () => {
		const box = document.getElementById('container');
		box.classList.remove('hidden');
		box.classList.add('block');
	}

	return (
				<button onClick={() => click()} className="rfocus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
					<span className=" font-bold">
					Create Giveaway
					</span>
				</button>
	);
};

export default Button;
