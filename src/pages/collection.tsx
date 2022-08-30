import type { NextPage } from 'next';
import Link from 'next/link';
import Card from '../components/Card';
const Collection: NextPage = () => {
	const items = Array(8).fill(0);
	return (
		<div className='w-full  p-0 m-auto'>
			<div className='z-20'>
				<h1 className='text-center font-josef mb-2 text-orange-500 font-semibold z-20'>Meet the latest winners from your favorite contest</h1>
				<h1 className='text-2xl text-center font-josef font-bold leading-1 md:text-8xl xxs:text-6xl mb-10 z-10'>LATEST WINNERS</h1>
				<div className='container-card-collection w-4/5 z-10'>
					{items.map((item, index) => (
						<Link href={`/collection/${index}`} key='index'>
							<a>
								<Card />
							</a>
						</Link>
					))}
				</div>
			</div>

		</div>
	);
};

export default Collection;
