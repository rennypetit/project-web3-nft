import type { NextPage } from 'next';
import StartLottery from '../components/StartLottery';
import Card from '../components/Card';
const Lottery: NextPage = () => {
	const items = Array(4).fill(0);
	return (
		<>
		<StartLottery />
		<div className='w-11/12  text-white p-0 m-auto'>
			
			<h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl mb-10'>PLAY NOW!</h1>
			
			
			<div className='container-card-collection w-4/5 z-10'>
				{items.map((item, index) => (
					<Card key={index} name={'Pikatchu'} price={0.1} number={10} end={5}/>
				))}
			</div>
		</div>
		<img src="/images/map.png" className='w-full' alt="" />
		</>
	);
};

export default Lottery;
