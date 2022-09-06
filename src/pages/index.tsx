import type { NextPage } from 'next';
import ContentLeft from '../components/ContentLeft';
import StartLottery from '../components/StartLottery';
import Card from '../components/Card';
const Home: NextPage = () => {
	const items = Array(4).fill(0);
	return (
		<div className=' w-full'>
			<StartLottery />
			<ContentLeft />
			
			<div className='w-1/2 mx-auto xl:w-1/2 md:w-4/5 xxs:w-4/5'>
				<h1 className='md:text-4xl xxs:text-5xl text-2xl font-josef font-bold  mt-10 mb-5'>Current Giveaways</h1>
				<div className='flex mx-auto justify-between flex-wrap'>
					{items.map((item, index) => (
						<Card key={index} name={'Pikatchu'} price={0.1} number={10} end={5}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
