import Image from 'next/image';

const Card = () => {
	return (
		<>
			{/* <div className='Mascara'></div> */}
			<div className='Card'>
				<Image
					src='/images/nft.png'
					alt='nft'
					width='419'
					height='391'
					layout='responsive'
				/>
				<p className='text-center pt-4 font-poppins font-medium'>Pikachu</p>
			</div>
		</>
	);
};

export default Card;
