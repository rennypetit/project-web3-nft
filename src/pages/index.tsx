import type { NextPage } from 'next';
import ContentLeft from '../components/ContentLeft';
import ContentRight from '../components/ContentRight';

import Layout from '../layout';
const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<div className='grid grid-rows-1 gap-8 text-white p-10 m-auto md:grid-cols-2'>
					<ContentLeft />
					<ContentRight />
				</div>
			</Layout>
		</>
	);
};

export default Home;
