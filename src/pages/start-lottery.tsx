/* eslint-disable react-hooks/rules-of-hooks */
import { useWeb3React } from '@web3-react/core';
import { useForm } from 'react-hook-form';
import { useLottery } from 'hooks';
import Services from 'services';

type IFormInput = {
	tokenId: number;
	nftContractAddress: string;
	bettingPrice: number;
	beneficiaryAddress: string;
	hours: number;
	minutes: number;
	endDate: number;
};
const startLottery = () => {
	const services = new Services(); // instance
	const lottery = useLottery();

	/* four */
	const { register, handleSubmit } = useForm<IFormInput>();
	const { library, account } = useWeb3React();
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		// const tokenId = Number(localStorage.getItem('tokenId'));
		// data.tokenId = tokenId;
		const date = new Date().getTime() / 1000;
		const hours = data.hours * 60 * 60; // hours to seconds
		const min = data.minutes * 60; // min to seconds
		data.endDate = Math.round(date + hours + min);
		data.price = library.utils.toWei(data.bettingPrice.toString(), 'ether');
		const response = await services.methodStartLottery(lottery, account, data);
	};
	/* end four */

	return (
		<div className='text-white'>
			<p>4: /start lottery</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>tokenId</label>
				<input
					className='text-black'
					{...register('tokenId', {
						required: true,
						minLength: 0,
					})}
					required
					minLength={0}
				/>{' '}
				<br />
				<br />
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
					type='number'
					{...register('bettingPrice', {
						required: true,
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
				<label>hours</label>
				<input
					className='text-black'
					required
					min={24}
					max={720}
					type='number'
					{...register('hours', {
						required: true,
						min: 24,
						max: 720,
					})}
				/>{' '}
				<br />
				<br />
				<label>minutes</label>
				<input
					className='text-black'
					required
					min={5}
					max={60}
					type='number'
					{...register('minutes', {
						required: true,
						min: 5,
						max: 60,
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
