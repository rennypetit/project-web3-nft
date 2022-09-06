import MyHead from '@components/Head';
import Header from '../components/Header';

const Layout = ({ children }) => {
	return (
		<>
			<MyHead />
			<Header />
			<div className='Layout flex min-h-screen flex-wrap w-full'>
				{children}
			</div>
		</>
	);
};

export default Layout;
