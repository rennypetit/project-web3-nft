/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm } from 'react-hook-form';
import { useNFT, useLottery } from 'hooks';
// import getLottery from '../services/lottery/getLottery';
import Services from 'services';

type IFormInput = {
	buy: number;
	lotteryId: number;
};
const startLottery = () => {
	const services = new Services(); // instance
	const lottery = useLottery();
	const { active, account } = useWeb3React();

	/* five */
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		const response = await services.methodBuyTicket(lottery, account, data);
		console.log(response);
	};
	/* end five */

	return (
		<div className='text-white'>
			<p>5: /buy tikect</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>buy</label>
				<input
					className='text-black'
					{...register('buy', {
						required: true,
					})}
					required
					type='number'
				/>{' '}
				<br />
				<br />
				<label>lotteryId</label>
				<input
					className='text-black'
					required
					type='number'
					{...register('lotteryId', {
						required: true,
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
