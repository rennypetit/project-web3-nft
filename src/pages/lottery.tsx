import type { NextPage } from 'next';
import Button from '../components/Button';
import Card from '../components/Card';
const Lottery: NextPage = () => {
	return (
		<div className='w-11/12  text-white p-0 m-auto'>
			<div className='m-auto w-80'>
				<Card />
				<div className='pt-6 text-center'>
					<Button text='Mint' />
				</div>
			</div>
		</div>
	);
};

export default Lottery;
