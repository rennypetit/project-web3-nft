import Services from '@services/index';
import { useWeb3React } from '@web3-react/core';
import { useLottery, useNFT } from 'hooks';
import React, { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import LotteryCard from './LotteryCard';

const BuyTicket = () => {

    const services = new Services(); // instance
    const lottery = useLottery();
    const [lotteries, setLotteries] = useState<any>();

    const getData = useCallback(async () => {
        if (lottery) {
            console.log("yes")
            const lottosToSet = await services.methodGetLotteries(lottery);
            setLotteries(lottosToSet);
            console.log(lotteries)
        }
    }, [lottery, services])

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>
                Want to play?
            </h2>
            <h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>
                Buy ticket
            </h1>
            <div >
                <div className='mt-5 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl'>
                    <h1 className='mb-5 pt-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
                        Active Lotteries
                    </h1>
                    <div className='mt-10 flex flex-wrap'>
                        {lotteries ? lotteries.map((item, index) => {
                            if (item.activeLottery) {
                                return <LotteryCard key={index} lotto={item} />
                            }

                        }) : <p className='text-center text-white'>Loading ...</p>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default BuyTicket