const newLotteryArtifact = {
	address: {
		5: '0x8ece7df68c4d9b0a94fba10b8599371a06a22b7c',
	},
	abi: [
		{
			inputs: [
				{ internalType: 'address', name: '_vrfCoordinatorV2', type: 'address' },
				{ internalType: 'uint64', name: '_vrfSubscriptionId', type: 'uint64' },
				{ internalType: 'bytes32', name: '_vrfGasLane', type: 'bytes32' },
				{
					internalType: 'uint32',
					name: '_vrfCallbackGasLimit',
					type: 'uint32',
				},
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
					indexed: false,
					internalType: 'uint256',
					name: 'lotteryId',
					type: 'uint256',
				},
			],
			name: 'EndLotteryEvent',
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
					internalType: 'uint256',
					name: 'requestId',
					type: 'uint256',
				},
			],
			name: 'PendingLotteriesWordsRequested',
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
					name: 'endDate',
					type: 'uint256',
				},
			],
			name: 'SingleLottery',
			type: 'event',
		},
		{
			inputs: [],
			name: 'CONTRACT_FEE',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
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
			inputs: [{ internalType: 'bytes', name: 'checkdata', type: 'bytes' }],
			name: 'checkUpkeep',
			outputs: [
				{ internalType: 'bool', name: 'upkeepNeeded', type: 'bool' },
				{ internalType: 'bytes', name: 'performData', type: 'bytes' },
			],
			stateMutability: 'view',
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
				{ internalType: 'address', name: '', type: 'address' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getLotteryCount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
			inputs: [],
			name: 's_pendingLotteryEnd',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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

export default newLotteryArtifact
