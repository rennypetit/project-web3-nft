import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className='Layout flex min-h-screen flex-wrap w-full'>
				{children}
			</div>
		</>
	);
};

export default Layout;
