import Image from 'next/image';

const CardInput = (props) => {
	return (
		<>
			<div className='Card xxs:mx-4'>
				<Image
					src='/images/nft.png'
					alt='nft'
					width='319'
					height='291'
					layout='responsive'
				/>
				<p className='text-center pt-4 font-poppins font-medium'>{props.name}</p>
			</div>
		</>
	);
};

export default CardInput;