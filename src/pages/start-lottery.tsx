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
		<div className='lg:w-3/4 mx-auto  text-white p-0 '>
			<h1 className='text-2xl text-white text-center font-josef font-bold leading-1 md:text-6xl xxs:text-5xl mb-10'>
				Create Lottery
			</h1>
			<div className="grid place-items-center">
				<form onSubmit={handleSubmit(onSubmit)} className=' w-full max-w-lg bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded px-8 pt-6 pb-8 mb-4'>
					<label className="block text-white text-sm font-bold mb-2" >Id of your NFT</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
						{...register('tokenId', {
							required: true,
							minLength: 0,
						})}
						required
						minLength={0}
					/>{' '}
					<br />
					<br />
					<label className="block text-white text-sm font-bold mb-2">Contract Address of your NFT</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
					<label className="block text-white text-sm font-bold mb-2">Betting Price</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
						required
						type='number'
						{...register('bettingPrice', {
							required: true,
						})}
					/>{' '}
					<br />
					<br />
					<label className="block text-white text-sm font-bold mb-2">Wallet Address of the beneficiary</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
					<label className="block text-white text-sm font-bold mb-2">Hours to finish</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
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
					<label className="block text-white text-sm font-bold mb-2">Minutes to finish</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight dark:text-white focus:outline-none focus:shadow-outline"
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
					<input type='submit' className='w-full rfocus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900' />
				</form>
			</div>
			{/* {modal && <Modal setModal={setModal} />} */}
		</div>
	);
};

export default startLottery;
