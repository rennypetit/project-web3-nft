import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const Header = () => {
	return (
		<header>
			<Popover className='relative'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6'>
					<div className='flex justify-between items-centerborder-gray-100 py-6 md:justify-start md:space-x-10'>
						<div className='flex justify-start lg:w-0 lg:flex-1'>
							<a href='#'>
								<span className='sr-only'>Workflow</span>
								<img
									className='h-8 w-auto sm:h-10'
									src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
									alt=''
								/>
							</a>
						</div>
						<div className='-mr-2 -my-2 md:hidden'>
							<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
								<span className='sr-only'>Open menu</span>
								<Bars3Icon className='h-6 w-6' aria-hidden='true' />
							</Popover.Button>
						</div>
						<Popover.Group as='nav' className='hidden md:flex space-x-10'>
							<a href='#' className='text-base font-medium text-white'>
								Lottery
							</a>
							<a href='#' className='text-base font-medium text-white'>
								Collection
							</a>
							<a href='#' className='text-base font-medium text-white'>
								Admin
							</a>
						</Popover.Group>
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
							<a
								href='#'
								className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-500 rounded-md shadow-sm text-base font-medium text-yellow-500 bg-transparent relative m-0'
							>
								Wallet
								<div className='border border-yellow-500 rounded-md shadow-sm text-base font-medium text-yellow-500 bg-transparent absolute w-full h-full p-4 top-0 left-0 m-1'></div>
							</a>
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
						className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
					>
						<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
							<div className='pt-5 pb-6 px-5'>
								<div className='flex items-center justify-between'>
									<div>
										<img
											className='h-8 w-auto'
											src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
											alt='Workflow'
										/>
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
								<div className='grid gap-y-4 gap-x-8 justify-center text-center'>
									<a
										href='#'
										className='text-base font-medium text-gray-900 hover:text-gray-700'
									>
										Lottery
									</a>

									<a
										href='#'
										className='text-base font-medium text-gray-900 hover:text-gray-700'
									>
										Collection
									</a>
									<a
										href='#'
										className='text-base font-medium text-gray-900 hover:text-gray-700'
									>
										Admin
									</a>
								</div>
								<div className='text-center m-0'>
									<a
										href='#'
										className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-500 rounded-md shadow-sm text-base font-medium text-yellow-500 bg-transparent relative w-48 m-0'
									>
										Wallet
										<div className='border border-yellow-500 rounded-md shadow-sm text-base font-medium text-yellow-500 bg-transparent absolute w-full h-full p-4 top-0 left-0 m-1'></div>
									</a>
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
