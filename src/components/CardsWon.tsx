import Image from 'next/image';
import truncated from 'utils/truncateAddress';


const CardsWon = (props: any) => {
	return (
		<>
			<div className='Card xxs:mx-8'>
				<Image
					src='/images/nft.png'
					alt='nft'
					width='319'
					height='291'
					layout='responsive'
				/>
				<p className='text-white text-center pt-4 font-poppins font-medium'>Winner</p>
				<p className='text-white text-center pt-4 font-poppins font-medium pb-3'>{truncated(props.name)}</p>
				<p className='text-white'>Beneficiary: {truncated(props.beneficiary)}</p>
				<p className='text-white'>Nft Contract: {truncated(props.nftContract)}</p>
			</div>
		</>
	);
};

export default CardsWon;