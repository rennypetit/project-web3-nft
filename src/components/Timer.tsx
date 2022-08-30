import React, { useEffect } from 'react';
import { useTimer, useTime } from 'react-timer-hook';

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
			<div className='text-white-500 text-2xl'>
				<h1 className='text-white-500 text-1xl m-0 pt-0 lg:text-2xl mb-5' >Time left for our next draw</h1>
				<table className='m-auto'>
					<tr className='text-4xl'>
						<th>{days} Days - </th>
						<th>{hours} Hours - </th>
						<th>{minutes} Minutes - </th>
						<th>{seconds} Seconds</th>
					</tr>
					<tr></tr>
				</table>
			</div>
		</div>
	);
};

/* function Timer() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour'});

  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Current Time Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
      </div>
    </div>
  );
} */

export default Timer;
