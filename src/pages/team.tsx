import type { NextPage } from 'next';
import TeamCard from '../components/TeamCard';
import teamData from '../../team.json';

const Team: NextPage = () => {
    const items = teamData.team
	return (
        <>
		<div className='w-11/12  text-white p-0 m-auto'>
            <h1 className='text-whitetext-2xl text-center font-poppins font-medium leading-1 sm:text-4xl md:text-left xl:text-5xl'>
				Development 
				<span className='text-yellow-500'> Team</span> <br /> <br />
			</h1>
			<div className='container-card-collection'>
                {items.map((item, index) => (
                    <TeamCard key={index} item={item}/>
                ))}
			</div>
		</div>
        </>
	);
};

export default Team;
