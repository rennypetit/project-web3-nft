import type { NextPage } from 'next';
import Card from '../../components/Card';
import Information from '../../components/Information';
const Lottery: NextPage = () => {
	return (
		<div className='w-11/12  text-white p-0 m-auto'>
			<p className='text-white-500 text-right mr-96'><a href="/collection">X</a></p>
			<div className='m-auto w-60'>
				<Card />
			</div>
			<div className='py-6 text-center m-auto w-full md:w-6/12'>
				<Information />
			</div>
		</div>
	);
};

export default Lottery;
