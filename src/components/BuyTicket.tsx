import Services from "@services/index";
import { useWeb3React } from "@web3-react/core";
import { useLottery, useNFT } from "hooks";
import React, { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LotteryCard from "./LotteryCard";
import Web3 from "web3";
require("dotenv").config();
import newLotteryArtifact from "@config/artifacts/newLottery";

const { address, abi } = newLotteryArtifact;

const BuyTicket = () => {
	const services = new Services(); // instance
	const lottery = useLottery();
	const nft = useNFT();
	const { active, account } = useWeb3React();
	const [data, setData] = useState(null);
	const [activeLotteries, setActiveLotteries] = useState([]);
	const [lottoToBuy, setLottoToBuy] = useState();
	const [lotteries, setLotteries] = useState<any>();
	const chainId = 5;
	const network = process.env.ETHEREUM_NETWORK;
	console.log(network);
	const web3 = new Web3(
		new Web3.providers.HttpProvider(
			`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
		)
	);

	const lotteryInfura = new web3.eth.Contract(abi, address[chainId]);
	console.log(lottery, lotteryInfura);
	const update = async () => {
		const lottosToSet = await services.methodGetLotteries(lotteryInfura);
		setLotteries(lottosToSet);
	};

	const getData = useCallback(async () => {
		if (lotteryInfura && address[chainId]) {
			console.log("yes");
			console.log(address[chainId]);
			console.log(lotteryInfura);
			const lottosToSet = await services.methodGetLotteries(lotteryInfura);
			setLotteries(lottosToSet);
		}
	}, [lotteries, lottery, services, address[chainId]]);

	useEffect(() => {
		getData();
	}, []);

	/* five */
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		const response = await services.methodBuyTicket(lottery, account, data);
	};
	/* end five */

	const handleSelect = (event) => {
		event.preventDefault();
		setLottoToBuy(0);
	};

	return (
		<>
			<h2 className="font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500">
				Want to play?
			</h2>
			<h1 className="font-josef font-bold text-1xl lg:text-2xl">Buy ticket</h1>
			<div>
				<div className="mt-5  rounded-3xl">
					<h1 className="pt-5 mb-5 text-center font-josef text-3xl m-0 pt-0 lg:text-2xl">
						Active lotteries
					</h1>
					<div className="mt-10 flex flex-wrap">
						{lotteries ? (
							lotteries.map((item, index) => {
								if (item.activeLottery) {
									return (
										<LotteryCard key={index} lotto={item} update={update} />
									);
								}
							})
						) : (
							<p className="text-white text-center">Loading ...</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default BuyTicket;
