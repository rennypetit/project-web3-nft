import Services from '@services/index';
import { useWeb3React } from '@web3-react/core';
import { useLottery, useNFT } from 'hooks';
import React, { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import LotteryCard from './LotteryCard';

const BuyTicket = () => {

    const services = new Services(); // instance
    const lottery = useLottery();
    const nft = useNFT();
    const { active, account } = useWeb3React();
    const [data, setData] = useState(null);
    const [activeLotteries, setActiveLotteries] = useState([{}]);
    const [lottoToBuy, setLottoToBuy] = useState();

    const getData = useCallback(async () => {
        if (lottery && nft) {
            // l.nftOwner, l.nftContractAddress, l.bettingPrice, l.activeLottery, l.players, l.lotteryBalance, l.lotteryWinner, l.endDate
            const response = await services.methodGetLottery(lottery);
            if (response) {
                const nftOwner = response[0]
                const nftContractAddress = response[1]
                const bettingPrice = response[2]
                const activeLottery = response[3]
                const players = response[4]
                const lotteryBalance = response[5]
                const lotteryWinner = response[6]
                const endDate = response[7]
                const newLotto = { nftOwner, nftContractAddress, bettingPrice, activeLottery, players, lotteryBalance, lotteryWinner, endDate }
                setActiveLotteries([...activeLotteries, newLotto])
            }
            console.log(response);
        }
    }, [activeLotteries, lottery, nft, services]);

    useEffect(() => {
        getData();
    }, []);



    /* five */
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const response = await services.methodBuyTicket(lottery, account, data);
        console.log(response);
    };
    /* end five */

    const handleSelect = (event) => {
        event.preventDefault();
        setLottoToBuy(0)
    }

    return (
        <>
            <h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>
                Want to play?
            </h2>
            <h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>
                Buy ticket
            </h1>
            <div className='mt-10 flex flex-wrap'>
                <div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
                    <h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        CHOOSE
                    </h1>
                    <p>
                        <div>
                        {activeLotteries[1] ? <LotteryCard lotto={activeLotteries[1]} /> : 'There is not lotteries'}
                        <button onClick={handleSelect}className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                            <span className='relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Select this
                            </span>
                        </button>
                        </div>
                    </p>
                </div>
                <div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
                    <h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        BUY
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>buy</label>
                        <br />
                        <input
                            className='text-black'
                            {...register('buy', {
                                required: true,
                            })}
                            required
                            type='number'
                        />{' '}
                        <br />
                        <br />
                        <label>lotteryId</label>
                        <br />
                        <input
                            className='text-black'
                            required
                            type='number'
                            {...register('lotteryId', {
                                required: true,
                            })}
                            value={lottoToBuy != null ? lottoToBuy : ''}
                        />{' '}
                        <br />
                        <br />
                        <div className='inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                            <span className=' px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                <input type='submit' value="Buy ticket" />
                            </span>
                        </div>
                    </form>
                </div>
                <div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
                    <h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        BUY
                    </h1>
                </div>
            </div>
        </>
    )
}

export default BuyTicket