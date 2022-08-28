import type { NextPage } from 'next';
import Link from 'next/link';
import Card from '../components/Card';
const Collection: NextPage = () => {
	const items = Array(7).fill(0);
	return (
		<div className='w-11/12  text-white p-0 m-auto'>
			<div className='container-card-collection'>
				{items.map((item, index) => (
					<Link href={`/collection/${index}`} key='index'>
						<a>
							<Card />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Collection;
