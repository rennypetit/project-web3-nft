import type { NextPage } from 'next';
import Card from '../../components/Card';
import Information from '../../components/Information';
const Lottery: NextPage = () => {
	return (
		<div className='w-11/12  text-white p-0 m-auto'>
			
			<div className='m-auto w-60'>
				<button onClick={()=>window.location.href='/collection'} type="button" className="align-middle mb-5 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
					<svg aria-hidden="true" className=" w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fill-rule="nonzero"/>
					</svg>
					<span className='align-middle'>BACK</span>
				</button>
				<Card />
			</div>
			<div className='py-6 text-center m-auto w-full md:w-6/12'>
				<Information />
			</div>
		</div>
	);
};

export default Lottery;
