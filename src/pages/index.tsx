import type { NextPage } from 'next';
import ContentLeft from '../components/ContentLeft';
import ContentRight from '../components/ContentRight';

import Layout from '../layout';
const Home: NextPage = () => {
	return (
		<Layout>
			<div className='w-11/12 grid grid-rows-1 gap-8 text-white p-0 pt-4 m-auto md:grid-cols-2'>
				<ContentLeft />
				<ContentRight />
			</div>
		</Layout>
	);
};

export default Home;
