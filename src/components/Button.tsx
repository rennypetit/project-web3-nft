import React from 'react';

const Button = ({ text }) => {
	return (
		<a
			href='#'
			className='font-rubik font-normal whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-500 rounded-md shadow-sm text-basetext-yellow-500 bg-transparent relative w-28 m-0'
		>
			<span className='p-0.5 font-medium text-yellow-500'>{text}</span>
			<div className='border border-yellow-500 rounded-md shadow-sm text-base bg-transparent absolute w-full h-full p-4 top-0 left-0 m-1'></div>
		</a>
	);
};

export default Button;
