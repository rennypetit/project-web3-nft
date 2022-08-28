import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp }) => {
	const {
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		expiryTimestamp,
		autoStart: true,
		onExpire: () => console.warn('onExpire called'),
	});

	useEffect(() => {
		console.log('cha');
		if (typeof window !== 'undefined') {
			const time = new Date();
			time.setSeconds(time.getSeconds() + 300000);
			restart(time);
		}
	}, []);

	return (
		<div className='text-center pt-12'>
			<div className='text-yellow-500 font-sanchez font-normal'>
				<table className='m-auto'>
					<tr className='text-4xl'>
						<th>{days} - </th>
						<th>{hours} - </th>
						<th>{minutes} - </th>
						<th>{seconds}</th>
					</tr>
					<tr>
						<td>Days</td>
						<td>Hours</td>
						<td>Minutes</td>
						<td>Seconds</td>
					</tr>
					<tr></tr>
				</table>
			</div>
		</div>
	);
};

export default Timer;
