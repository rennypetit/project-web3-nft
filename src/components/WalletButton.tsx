import React from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import { useCallback, useEffect, useState } from 'react';

const WalletButton = ({ text: string }) => {
	const { active, activate, deactivate, account, error, library } =
		useWeb3React();

	const isUnsupportedChain = error instanceof UnsupportedChainIdError;

	const connect = useCallback(() => {
		activate(connector);
		localStorage.setItem('previouslyConnected', 'true');
	}, [activate]);

	const disconnect = () => {
		deactivate();
		localStorage.removeItem('previouslyConnected');
	};

	useEffect(() => {
		if (localStorage.getItem('previouslyConnected') === 'true') connect();
	}, [connect]);

	return (
		<>
			{active ? (
				<button
					onClick={disconnect}
					className='font-rubik font-normal whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-500 rounded-md shadow-sm text-basetext-yellow-500 bg-transparent relative w-28 m-0'
				>
					<span className='p-0.5 font-medium text-yellow-500'>
						Hola {account}
					</span>
					<div className='border border-yellow-500 rounded-md shadow-sm text-base bg-transparent absolute w-full h-full p-4 top-0 left-0 m-1'></div>
				</button>
			) : (
				<button
					onClick={connect}
					className='font-rubik font-normal whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-500 rounded-md shadow-sm text-basetext-yellow-500 bg-transparent relative w-28 m-0'
				>
					<span className='p-0.5 font-medium text-yellow-500'>Wallet</span>
					<div className='border border-yellow-500 rounded-md shadow-sm text-base bg-transparent absolute w-full h-full p-4 top-0 left-0 m-1'></div>
				</button>
			)}
		</>
	);
};

export default WalletButton;
