import { useCallback, useEffect, useState } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from '@config/web3';
import { ButtonConnect, ButtonDisconnect } from './index';

// import Button from './Button';

const ContainerButton = () => {
	const { active, activate, deactivate, account, error, library } =
		useWeb3React();

	// change red
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
				<ButtonDisconnect disconnect={disconnect} account={account} />
			) : (
				<ButtonConnect
					connect={connect}
					isUnsupportedChain={isUnsupportedChain}
				/>
			)}
		</>
	);
};

export default ContainerButton;
