import type { NextPage } from 'next';
import TeamCard from '../components/TeamCard';
import teamData from '../../team.json';

const Team: NextPage = () => {
    const items = teamData.team
	return (
        <>
		<div className='w-11/12  text-white p-0 m-auto'>
            <h1 className='text-2xl text-white text-center font-josef font-bold leading-1 md:text-6xl xxs:text-5xl mb-10'>
				Development Team <br /> <br />
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
