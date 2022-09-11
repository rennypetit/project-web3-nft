import Head from 'next/head';
const MyHead = () => {
	return (
		<Head>
			<title>Philanthropy</title>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				content='width=device-width,initial-scale=1,maximum-scale=5'
				name='viewport'
			/>
			<meta name='robots' content='index' />

			{/* navegador */}
			<meta name='title' content='Philanthropy' />
			<meta
				name='description'
				content='Philanthropy, is the platform of NFTs created for charitable purposes and offered, in a disinterested way, to raffle. The benefits will go to the charities directly, without intermediaries, thanks to Blockchain Technology. 100% Transparency.'
			/>
			<link rel='canonical' href='https://philanthropy.vercel.app' />

			{/* opengraph */}
			<meta property='og:title' content='Philanthropy' />
			<meta
				property='og:description'
				content='Philanthropy, is the platform of NFTs created for charitable purposes and offered, in a disinterested way, to raffle. The benefits will go to the charities directly, without intermediaries, thanks to Blockchain Technology. 100% Transparency.'
			/>
			<meta property='og:url' content='https://philanthropy.vercel.app' />
			<meta
				property='og:image'
				content='https://philanthropy.vercel.app/images/opengraph.jpg'
			/>
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='"Philanthropy' />
			<meta property='og:locale' content='es' />
			<meta property='og:image:width' content='600' />
			<meta property='og:image:height' content='409' />

			{/* twitter */}
			<meta name='twitter:title' content='Philanthropy' />
			<meta
				name='twitter:description'
				content='Philanthropy, is the platform of NFTs created for charitable purposes and offered, in a disinterested way, to raffle. The benefits will go to the charities directly, without intermediaries, thanks to Blockchain Technology. 100% Transparency.'
			/>
			<meta name='twitter:url' content='https://philanthropy.vercel.app' />
			<meta
				name='twitter:image'
				content='https://philanthropy.vercel.app/images/opengraph.jpg'
			/>
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='Philanthropy' />

			{/* favicon */}
			<link
				rel='shortcut icon'
				href={`https://philanthropy.vercel.app/images/favicon.png`}
				type='image/x-icon'
			/>
			<link
				rel='icon'
				href={`https://philanthropy.vercel.app/images/favicon.png`}
				type='image/x-icon'
			/>
		</Head>
	);
};

export default MyHead;
