import type { NextPage } from 'next';
import Card from '../components/Card';
const Collection: NextPage = () => {
	return (
		<div className='w-11/12  text-white p-0 m-auto'>
			<div className='container-card-collection'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Collection;
