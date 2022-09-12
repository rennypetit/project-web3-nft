import Image from "next/image";
import truncated from "utils/truncateAddress";
import React, { useEffect, useState } from "react";
import { useLottery, useNFT } from "hooks";
import Services from "@services/index";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import NFTArtifact from "@config/artifacts/NFT";

const CardsWon = (props: any) => {
	const { library, account } = useWeb3React();
	const services = new Services(); // instance
	const lottery = useLottery();
	const [data, setData] = useState(false);
	const [img, setImg] = useState();
	const chainId = 5;
	const network = process.env.ETHEREUM_NETWORK;
	const web3 = new Web3(
		new Web3.providers.HttpProvider(
			`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
		)
	);
	console.log(props);
	const [nftInfura, setNftInfura] = useState(
		new web3.eth.Contract(NFTArtifact.abi, props.lotto.nftContractAddress)
	);
	let bettingPrice = Web3.utils.fromWei(
		props.lotto.bettingPrice.toString(),
		"ether"
	);
	const newDate = new Date();
	newDate.setTime(props.lotto.endDate * 1000);
	const dateString = newDate.toUTCString();

	useEffect(() => {
		if (nftInfura) {
			const MetaData = async (tokenURI = 1) => {
				const dataTokenURI = await services.methodMetaData(nftInfura, tokenURI);
				const res = await fetch(dataTokenURI);
				const dataNFT = await res.json();
				if (dataNFT.image) {
					await fetch(dataNFT.image)
						.then(async (imgToSet) => {
							let blob = await imgToSet.blob();
							var urlCreator = window.URL || window.webkitURL;
							var imageUrl = urlCreator.createObjectURL(blob);
							console.log(imageUrl);
							setImg(imageUrl);
						})
						.catch((e) => console.error(e));
				}
				console.log(dataNFT);
				setData(dataNFT);
			};
			MetaData(props.lotto.nftTokenId);
		}
	}, [nftInfura]);
	console.log(props.lotto);
	return (
		<>
			<div className="Card xxs:mx-8 md:w-1/3 m-2 p-4 sm:w-full xxs:w-full">
				<p>Previous Owner: {truncated(props.lotto.nftOwner)}</p>
				<p>Nft: {data.name}</p>
				{/* {img ? (<img src={img} width={50} height={50}/>):("")} */}
				{img ? (
					<Image src={img} alt="nft" width={200} height={200} />
				) : (
					"Loading image..."
				)}
				<p className="text-white pt-4 font-poppins font-medium">
					Winner: {truncated(props.lotto.lotteryWinner)}
				</p>

				<p>Betting price: {bettingPrice} eth</p>
				<p>Players: {props.lotto.players.length}</p>
				<p>Collected: {props.lotto.players.length * bettingPrice} eth</p>
				<p>Ended on: {dateString}</p>
				<p>Beneficiary {truncated(props.lotto.beneficiaryAddress)}</p>
			</div>
		</>
	);
};

export default CardsWon;
