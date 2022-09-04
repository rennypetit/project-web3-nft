import type { NextPage } from 'next';
import ContentLeft from '../components/ContentLeft';
import StartLottery from '../components/StartLottery';
const Home: NextPage = () => {
	return (
		<div className='grid grid-rows-1 gap-8 text-white p-0 pt-4 m-auto md:grid-cols-1 w-full'>
			<StartLottery />
			<ContentLeft />
			<div className='backgroundHolder '>
				<img src="/images/hero-4-circle.png" alt="" className='mainBackground z-0 fixed top-0 w-full object-fill'/>
			</div>
		</div>
	);
};

export default Home;
