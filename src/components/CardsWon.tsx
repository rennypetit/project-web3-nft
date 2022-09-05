import Image from 'next/image';

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
				<p className='text-white text-center pt-4 font-poppins font-medium'>{props.name}</p>
				<p className='text-white'>Price: {props.price} ETH</p>
                <p className='text-white'>Participants: {props.ParNum}</p>
				<p className='text-white'>Winner: {props.WinName}</p>
			</div>
		</>
	);
};

export default CardsWon;