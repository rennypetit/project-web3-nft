import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'

const LotteryCard = (props: any) => {
    // const newLotto = { nftOwner, nftContractAddress, bettingPrice, activeLottery, players, lotteryBalance, lotteryWinner, endDate }
    const { library } = useWeb3React();
    let bettingPrice = library.utils.fromWei(props.lotto.bettingPrice.toString(), 'ether')
    let lotteryBalance = library.utils.fromWei(props.lotto.lotteryBalance.toString(), 'ether')
    const newDate = new Date();
    newDate.setTime(props.lotto.endDate * 1000);
    const dateString = newDate.toUTCString();
    // 

    const handleSelect = (event: any) => {
        event.preventDefault();
    }

    return (
        <div>
            <p>Owner: {props.lotto.nftOwner}</p>
            <p>Nft contract: {props.lotto.nftContractAddress}</p>
            <p>Betting price: {bettingPrice} eth</p>
            <p>Is active: {props.lotto.activeLottery ? 'true' : 'false'}</p>
            <p>Players: {props.lotto.players.length}</p>
            <p>Balance: {lotteryBalance} eth</p>
            {props.lotto.lotteryWinner === '0x0000000000000000000000000000000000000000' ?
                <p>Winner: No winner </p> :
                <p>Winner: {props.lotto.lotteryWinner}</p>
            }
            <p>End date: {dateString}</p>
        </div>
    )
}

export default LotteryCard