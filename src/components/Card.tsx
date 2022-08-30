import Image from 'next/image';

const Card = () => {
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
				<p className='text-center pt-4 font-poppins font-medium'>Pikachu</p>
			</div>
		</>
	);
};

export default Card;
