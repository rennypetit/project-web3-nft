/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm } from 'react-hook-form';
import { useNFT, useLottery } from 'hooks';
// import getLottery from '../services/lottery/getLottery';
import Services from 'services';
import Modal from '@components/web3/modal';
type IFormInput = {
	address: string;
};

const methods = () => {
	const services = new Services(); // instance
	const lottery = useLottery();
	const nft = useNFT();
	const { active, account } = useWeb3React();
	const [data, setData] = useState(null);
	// const [modal, setModal] = useState(false);

	/* one */
	const getData = useCallback(async () => {
		if (lottery && nft) {
			const response = await services.methodGetLottery(lottery, 0);
			console.log(response);
		}
	}, [nft, lottery, account]);

	useEffect(() => {
		getData();
	}, [getData]);

	/* end one */

	/* two */

	const handleMint = async () => {
		const mint = localStorage.getItem('safeMint');
		if (mint === 'send') return alert('fue enviada esperando confirmacion');
		if (mint === 'confirmed') return alert('Ya tiene permisos');

		const response = await services.methodPostSafeMint(nft, account);
		if (response)
			localStorage.setItem(
				'tokenId',
				response.events.Transfer.returnValues.tokenId
			);
		// setModal(true);
	};
	/* end two */

	/* three */
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		const tokenId = Number(localStorage.getItem('tokenId'));
		data.tokenId = tokenId;
		const response = await services.methodPostApprove(nft, account, data);
		if (response) localStorage.removeItem('safeMint');
	};
	/* end three */

	return (
		<div className='text-white'>
			data:
			{data && <p>{data.address}</p>}
			<p>2: /mint</p>
			<button onClick={() => handleMint()}>Button Mint</button>
			<p>3: /transferir nft</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>address</label>
				<input
					className='text-black'
					{...register('address', {
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
				<input type='submit' />
			</form>
			{/* {modal && <Modal setModal={setModal} />} */}
		</div>
	);
};

export default methods;
