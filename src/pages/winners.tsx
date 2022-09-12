import Services from "@services/index";
import { useLottery } from "hooks";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import CardsWon from "../components/CardsWon";
import Web3 from "web3";
import newLotteryArtifact from "@config/artifacts/newLottery";
const { address, abi } = newLotteryArtifact;

const Winners: NextPage = () => {
	const items = Array(8).fill(0);
	const services = new Services(); // instance
	const [lotteries, setLotteries] = useState<any>();

	const chainId = 5;
	const network = process.env.ETHEREUM_NETWORK;
	const web3 = new Web3(
		new Web3.providers.HttpProvider(
			`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
		)
	);
	const [lotteryInfura, setLotteryInfura] = useState(
		new web3.eth.Contract(abi, address[chainId])
	);

	const getData = useCallback(async () => {
		if (lotteryInfura) {
			console.log("yes");
			const lottosToSet = await services.methodGetLotteries(lotteryInfura);
			setLotteries(lottosToSet);
			console.log(lotteries);
		}
	}, [lotteryInfura, services]);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="w-full  p-0 m-auto">
			<div className="z-20">
				<h1 className="text-center font-josef mb-2 text-orange-500 font-semibold z-20">
					Meet the latest winners from your favorite contest
				</h1>
				<h1 className="text-2xl text-white text-center font-josef font-bold leading-1 md:text-6xl xxs:text-5xl mb-10">
					Latest winners
				</h1>
				<div className="mt-10 flex flex-wrap">
					{lotteries ? (
						lotteries.map((item, index) => {
							if (!item.activeLottery) {
								return <CardsWon key={index} lotto={item} />;
							}
						})
					) : (
						<p className="text-center text-white">Loading ...</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Winners;
