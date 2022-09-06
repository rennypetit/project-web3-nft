import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../config/web3';

import Layout from '../layout';
import '../styles/globals.css';

// provider application
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Web3ReactProvider>
	);
}

export default MyApp;
