import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ContainerButton from './web3/ContainerButtons';
import Image
 from 'next/image';
const Header = () => {
	return (
		<header className='lg:w-3/4 mx-auto'>
			<Popover className='relative z-30'>
				<div className='w-11/12 mx-auto px-0'>
					<div className='flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10'>
						<div className='flex justify-start lg:w-0 lg:flex-1'>
							<Link href='/' >
								<h1 className='text-white z-10 font-bold text-xl cursor-pointer'>
								Philanthropy
								</h1>
							</Link>
						</div>
						<div className='-mr-2 -my-2 md:hidden'>
							<Popover.Button className='bg-transparent border border-yellow-500 rounded-md shadow-sm text-base rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
								<span className='sr-only'>Open menu</span>
								<Bars3Icon className='h-6 w-6' aria-hidden='true' />
							</Popover.Button>
						</div>
						<Popover.Group
							as='nav'
							className='font-poppins font-normal hidden md:flex space-x-10'
						>
							<Link href='/lottery'>
								<a className='text-base text-white'>Lottery</a>
							</Link>
							<Link href='/winners'>
								<a className='text-base text-white'>Winners</a>
							</Link>
							<Link href='/admin'>
								<a className='text-base text-white'>Admin</a>
							</Link>
							<Link href='/team'>
								<a className='text-base text-white'>Team</a>
							</Link>
						</Popover.Group>
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
							<ContainerButton />
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
						className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
					>
						<div className='rounded-lg shadow-lg  bg-white divide-y-2 divide-gray-50'>
							<div className='py-0 pb-6 px-5 pb-0'>
								<div className='flex items-center justify-between'>
									<div>
										<Link href='/'>
											<a className='text-black font-almendra'>
												Philanthropy
											</a>
										</Link>
									</div>
									<div className='-mr-2'>
										<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
											<span className='sr-only'>Close menu</span>
											<XMarkIcon className='h-6 w-6' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className='py-6 px-5 space-y-6'>
								<div className='font-poppins font-normal grid gap-y-4 gap-x-8 justify-center text-center'>
									<Link href='/lottery'>
										<a className='text-base text-gray-900 hover:text-gray-700'>
											Lottery
										</a>
									</Link>

									<Link href='/collection'>
										<a className='text-base text-gray-900 hover:text-gray-700'>
											Collection
										</a>
									</Link>

									<Link href='/admin'>
										<a className='text-base text-gray-900 hover:text-gray-700'>
											Admin
										</a>
									</Link>
								</div>
								<div className='text-center m-0'>
									<ContainerButton />
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
