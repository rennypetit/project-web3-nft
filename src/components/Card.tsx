import Image from 'next/image';

const Card = (props) => {
	return (
		<>
			<div className='Card'>
				<Image
					src='/images/nft.png'
					alt='nft'
					width='319'
					height='291'
					layout='responsive'
				/>
				<p className='text-center pt-4 font-poppins font-medium'>{props.name}</p>
				<p>Price: {props.price} ETH</p>
				<p>Number: {props.number}</p>
				<p>End in {props.end} minutes</p>
				<div className='pt-6 text-center'>
				<button  onClick={()=>console.log("Hello")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
					<span className="relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Mint
					</span>
				</button>
				</div>
			</div>
		</>
	);
};

export default Card;
