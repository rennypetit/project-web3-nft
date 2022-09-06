import Head from 'next/head';
const MyHead = () => {
	return (
		<Head>
			<title>NFT Giveaways for The Good Cause</title>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				content='width=device-width,initial-scale=1,maximum-scale=5'
				name='viewport'
			/>
			<meta name='robots' content='index' />

			{/* navegador */}
			<meta name='title' content='NFT Giveaways  for The Good Cause' />
			<meta
				name='description'
				content='PLATAFORMA QUE CANALICE LA SOLIDARIDAD DE COMPAÑIAS, ENTIDADES PÚBLICAS O ARTISTAS A TRAVÉS DE SORTEO DE NFTS CREADOS PARA TAL FIN.'
			/>
			<link rel='canonical' href='https://project-web3-nft.vercel.app' />

			{/* opengraph */}
			<meta property='og:title' content='NFT Giveaways  for The Good Cause' />
			<meta
				property='og:description'
				content='PLATAFORMA QUE CANALICE LA SOLIDARIDAD DE COMPAÑIAS, ENTIDADES PÚBLICAS O ARTISTAS A TRAVÉS DE SORTEO DE NFTS CREADOS PARA TAL FIN.'
			/>
			<meta property='og:url' content='https://project-web3-nft.vercel.app' />
			<meta
				property='og:image'
				content='https://project-web3-nft.vercel.app/images/opengraph.jpg'
			/>
			<meta property='og:type' content='website' />
			<meta
				property='og:site_name'
				content='"NFT Giveaways  for The Good Cause'
			/>
			<meta property='og:locale' content='es' />
			<meta property='og:image:width' content='600' />
			<meta property='og:image:height' content='409' />

			{/* twitter */}
			<meta name='twitter:title' content='NFT Giveaways  for The Good Cause' />
			<meta
				name='twitter:description'
				content='PLATAFORMA QUE CANALICE LA SOLIDARIDAD DE COMPAÑIAS, ENTIDADES PÚBLICAS O ARTISTAS A TRAVÉS DE SORTEO DE NFTS CREADOS PARA TAL FIN.'
			/>
			<meta name='twitter:url' content='https://project-web3-nft.vercel.app' />
			<meta
				name='twitter:image'
				content='https://project-web3-nft.vercel.app/images/opengraph.jpg'
			/>
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='NFT Giveaways  for The Good Cause' />

			{/* favicon */}
			<link
				rel='shortcut icon'
				href={`https://project-web3-nft.vercel.app/images/favicon.png`}
				type='image/x-icon'
			/>
			<link
				rel='icon'
				href={`https://project-web3-nft.vercel.app/images/favicon.png`}
				type='image/x-icon'
			/>
		</Head>
	);
};

export default MyHead;
