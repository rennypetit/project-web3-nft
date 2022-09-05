/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm } from 'react-hook-form';
import { useNFT, useLottery } from 'hooks';
// import getLottery from '../services/lottery/getLottery';
import Services from 'services';

type IFormInput = {
	nftContractAddress: string;
	bettingPrice: number;
	beneficiaryAddress: string;
	endDate: number;
};
const startLottery = () => {
	const services = new Services(); // instance
	const lottery = useLottery();
	const { active, account } = useWeb3React();

	/* four */
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		const tokenId = Number(localStorage.getItem('tokenId'));
		data.tokenId = tokenId;
		const response = await services.methodStartLottery(lottery, account, data);
		console.log(response);
	};
	/* end four */

	return (
		<div className='text-white'>
			<p>4: /start lottery</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>nftContractAddress</label>
				<input
					className='text-black'
					{...register('nftContractAddress', {
						required: true,
						minLength: 40,
						maxLength: 50,
					})}
					required
					minLength={40}
					maxLength={50}
				/>{' '}
				<br />
				<br />
				<label>bettingPrice</label>
				<input
					className='text-black'
					required
					min={10000000000000000}
					max={10000000000000000000}
					type='number'
					{...register('bettingPrice', {
						required: true,
						min: 10000000000000000,
						max: 10000000000000000000,
					})}
				/>{' '}
				<br />
				<br />
				<label>beneficiaryAddress</label>
				<input
					className='text-black'
					{...register('beneficiaryAddress', {
						required: true,
						minLength: 40,
						maxLength: 50,
					})}
					required
					minLength={40}
					maxLength={50}
				/>{' '}
				<br />
				<br />
				<label>endDate</label>
				<input
					className='text-black'
					required
					min={86400}
					max={864000}
					type='number'
					{...register('endDate', {
						required: true,
						min: 86400,
						max: 864000,
					})}
				/>{' '}
				<br />
				<br />
				<input type='submit' />
			</form>
			{/* {modal && <Modal setModal={setModal} />} */}
		</div>
	);
};

export default startLottery;
