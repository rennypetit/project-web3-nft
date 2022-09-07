import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';
const Header = () => {
	return (
		<header>
			<Popover className='relative Z-30'>
				<div className='w-11/12 mx-auto pr-40'>
					<div className='flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10 z-20'>
						<div className='flex  justify-center lg:w-0 lg:flex-1'>
							<h1 className='text-base text-white z-30'>
							Philanthropy
							</h1>
						</div>
						<div className='-mr-2 -my-2 md:hidden z-10'>
							<Popover.Button className='bg-transparent border border-yellow-500 shadow-sm text-base rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-30'>
								<span className='sr-only'>Open menu</span>
								<Bars3Icon className='h-6 w-6' aria-hidden='true' />
							</Popover.Button>
						</div>
						<Popover.Group
							as='nav'
							className='font-josef font-normal hidden md:flex space-x-10'
						>
							<Link href='/lottery'>
								<a className='text-base text-white z-20'>Lottery</a>
							</Link>
							<Link href='/winners'>
								<a className='text-base text-white z-20'>Winners</a>
							</Link>
							<Link href='/Team'>
								<a className='text-base text-white z-20'>Team</a>
							</Link>
						</Popover.Group>
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0 z-20'>
							<Button text='Wallet' />
						</div>
					</div>
				</div>

				<Transition
					as={Fragment}
					enter='duration-200 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<Popover.Panel
						focus
						className='absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
					>
						<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 z-10'>
							<div className='py-0 pb-6 px-5 '>
								<div className='flex items-center justify-between'>
									<div className='bg-zinc-800 p-2 mt-2 rounded-md'>
										<Link href='/' >
{/* 											<a className='text-black v'>
												POKEMONGAME<span className='font-bold'>.card</span>
											</a> */}
											<img src="/images/logo-nft.png" className=' xxs:w-32' alt="Logo" />
										</Link>
									</div>
									<div className='-mr-2'>
										<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-2s0'>
											<span className='sr-only'>Close menu</span>
											<XMarkIcon className='h-6 w-6' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className='py-6 px-5 space-y-6'>
								<div className='font-josef font-normal grid gap-y-4 gap-x-8 justify-center text-center'>
									<Link href='/lottery'>
										<a className='text-base text-gray-900 hover:text-gray-700'>
											Lottery
										</a>
									</Link>

									<Link href='/winners'>
										<a className='text-base text-gray-900 hover:text-gray-700'>
											Winners
										</a>
									</Link>

									<Link href='/Team'>
										<a className='text-base text-gray-900 hover:text-gray-700'>
											Team
										</a>
									</Link>
								</div>
								<div className='text-center m-0 pr-2'>
									<Button text='Wallet' />
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
};

export default Header;
