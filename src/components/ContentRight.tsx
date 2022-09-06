import Card from './Card';

const ContentRight = () => {
	return (
		<div className='m-auto w-80 lg:mr-0'>
			<Card />
			<div className='pt-4 mb-4'>
				<p className='text-center text-yellow-900 md:text-left'>
					The winner can mint the prize in the Collection tab. Last winner:
					0xea7...1DA0
				</p>
			</div>
		</div>
	);
};

export default ContentRight;
