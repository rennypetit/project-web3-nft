const LotteryArtifact = {
	address: {
		5: '0x1BD43d4BB38DAc39E164D5b899C5780543F01347',
	},
	abi: [
		{
			inputs: [
				{ internalType: 'uint64', name: 'subscriptionId', type: 'uint64' },
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'have', type: 'address' },
				{ internalType: 'address', name: 'want', type: 'address' },
			],
			name: 'OnlyCoordinatorCanFulfill',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'player',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'lotteryBalance',
					type: 'uint256',
				},
			],
			name: 'BuyTicket',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'currentWinner',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: 'activeLottery',
					type: 'bool',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'nftContractAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'awardBalance',
					type: 'uint256',
				},
			],
			name: 'PickTheWinner',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'nftOwner',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'nftTokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'nftContractAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'bettingPrice',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: 'activeLottery',
					type: 'bool',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'beneficiaryAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'startDate',
					type: 'uint256',
				},
			],
			name: 'SingleLottery',
			type: 'event',
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_lotteryId', type: 'uint256' },
			],
			name: 'buyTicket',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
			name: 'checkUpkeep',
			outputs: [
				{ internalType: 'bool', name: 'upkeepNeeded', type: 'bool' },
				{ internalType: 'bytes', name: '', type: 'bytes' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_lotteryId', type: 'uint256' },
				{ internalType: 'uint256', name: '_winnerIndex', type: 'uint256' },
			],
			name: 'endLottery',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getContractBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_lotteryId', type: 'uint256' },
			],
			name: 'getLottery',
			outputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'bool', name: '', type: 'bool' },
				{ internalType: 'address[]', name: '', type: 'address[]' },
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'uint256', name: '', type: 'uint256' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'bytes', name: '', type: 'bytes' },
			],
			name: 'onERC721Received',
			outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
			name: 'performUpkeep',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'requestId', type: 'uint256' },
				{ internalType: 'uint256[]', name: 'randomWords', type: 'uint256[]' },
			],
			name: 'rawFulfillRandomWords',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'requestWordsPendingLotteries',
			outputs: [
				{ internalType: 'uint256', name: 's_requestId', type: 'uint256' },
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 's_randomWords',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_tokenId', type: 'uint256' },
				{
					internalType: 'address',
					name: '_nftContractAddress',
					type: 'address',
				},
				{ internalType: 'uint256', name: '_bettingPrice', type: 'uint256' },
				{
					internalType: 'address',
					name: '_beneficiaryAddress',
					type: 'address',
				},
				{ internalType: 'uint256', name: '_endDate', type: 'uint256' },
			],
			name: 'startLottery',
			outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
};

export default LotteryArtifact;
