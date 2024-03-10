import type { EvmChain } from '@/types/chain';
import { FAUCET_URL } from './urls';
// import { PHOTOGRAPH_ABI } from './abis/photograph.abi';
// import { MINTABLE_ERC20_ABI } from './abis/mintable-erc-20.abi';
// import { TELEPORTED_ERC20_ABI } from './abis/teleported-erc-20.abi';

export const C_CHAIN = {
  chainId: '43112',
  name: 'avalens-C-chain',
  shortName: 'C-Chain',
  subnetId: '-dont have this',
  platformChainId: '-dont have this',
  platformChainIdHex: '0xabc1bd35cb7313c8a2b62980172e6d7ef42aaa532c870499a148858b0b6a34fd',
  networkToken: {
    universalId: '43112-AVAX',
    decimals: 18,
    name: 'AVAX',
    symbol: 'AVAX',
  },
  slug: 'cchain',
  explorerUrl: '',
  rpcUrl: 'https://super-duper-space-meme-x9g45v4wgx4fp75p-9650.app.github.dev/ext/bc/C/rpc',
  faucetUrl: ``,
  isTestnet: true,
  logoUrl:
    'https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg',
  primaryColor: '#e84142',
  contracts: {
    // Photograph: {
    //   universalId: '43113-0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   address: 'addr here',
    //   name: 'Photograph',
    //   symbol: 'AVAX',
    //   decimals: 18,
    //   abi: PHOTOGRAPH_ABI,
    // },
    
    
    
    // // Note, for C-Chain the mintable ERC-20 is the same as the teleported one
    // teleportedErc20: {
    //   universalId: '43113-0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   address: '0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   name: 'Example Teleporter Token',
    //   symbol: 'TLP',
    //   decimals: 18,
    //   // This is technically not the correct abi.  The correct one is MINTABLE_ERC20_ABI.
    //   // We use this ABI here as a hack to appease Wagmi, which throws type errors when
    //   // any union of multiple ABIs is passed to certain hooks (such as useContractRead).
    //   abi: TELEPORTED_ERC20_ABI,
    // },
    // bridge: {
    //   universalId: '43113-0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
    //   address: '0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
    //   name: 'Teleporter ERC20 Bridge',
    //   abi: TELEPORTER_BRIDGE_ABI,
    // },
  },
} as const satisfies EvmChain;

export const AVALENS_CHAIN = {
  chainId: '2024',
  name: 'avalenstest',
  shortName: 'AvaLens',
  subnetId: '2CZP2ndbQnZxTzGuZjPrJAm5b4s2K2Bcjh8NqWoymi8NZMLYQk',
  platformChainId: 'x4xJFRmG4S8t7X2GZNVBGeSiVNePEUdBzreF9L3CBMxpYiBB7',
  platformChainIdHex: '0x7d09fbd2ab16d2970f4b2f17a14c9402567c04b9bb3161ad9e8a8a946e05fb34',
  networkToken: {
    universalId: '2024-MERIT',
    decimals: 18,
    name: 'MERIT',
    symbol: 'MERIT',
  },
  slug: 'avlens',
  explorerUrl: '',
  rpcUrl: 'https://super-duper-space-meme-x9g45v4wgx4fp75p-9650.app.github.dev/ext/bc/x4xJFRmG4S8t7X2GZNVBGeSiVNePEUdBzreF9L3CBMxpYiBB7/rpc',
  faucetUrl: ``,
  isTestnet: true,
  logoUrl:
    'https://raw.githubusercontent.com/TobiasLoader/AvaLens/main/assets/avalens.png',
  primaryColor: '#e84142',
  contracts: {
    // mintableErc20: {
    //   universalId: '43113-0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   address: '0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   name: 'Example Teleporter Token',
    //   symbol: 'TLP',
    //   decimals: 18,
    //   abi: MINTABLE_ERC20_ABI,
    // },
    // // Note, for C-Chain the mintable ERC-20 is the same as the teleported one
    // teleportedErc20: {
    //   universalId: '43113-0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   address: '0x6F419E35a60439569640ca078ba5e86599E30cC6',
    //   name: 'Example Teleporter Token',
    //   symbol: 'TLP',
    //   decimals: 18,
    //   // This is technically not the correct abi.  The correct one is MINTABLE_ERC20_ABI.
    //   // We use this ABI here as a hack to appease Wagmi, which throws type errors when
    //   // any union of multiple ABIs is passed to certain hooks (such as useContractRead).
    //   abi: TELEPORTED_ERC20_ABI,
    // },
    // bridge: {
    //   universalId: '43113-0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
    //   address: '0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
    //   name: 'Teleporter ERC20 Bridge',
    //   abi: TELEPORTER_BRIDGE_ABI,
    // },
  },
} as const satisfies EvmChain;

// 
// export const DISPATCH_CHAIN = {
//   chainId: '779672',
//   name: 'Dispatch Subnet',
//   shortName: 'Dispatch',
//   subnetId: '7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5',
//   platformChainId: '2D8RG4UpSXbPbvPCAWppNJyqTG2i2CAXSkTgmTBBvs7GKNZjsY',
//   platformChainIdHex: '0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7',
//   networkToken: {
//     universalId: '779672-DIS',
//     decimals: 18,
//     name: 'DIS',
//     symbol: 'DIS',
//   },
//   slug: 'dispatch',
//   explorerUrl: 'https://subnets-test.avax.network/dispatch',
//   rpcUrl: 'https://subnets.avax.network/dispatch/testnet/rpc',
//   faucetUrl: `${FAUCET_URL}/?subnet=dispatch&token=dispatch`,
//   isTestnet: true,
//   logoUrl:
//     'https://images.ctfassets.net/gcj8jwzm6086/60XrKdf99PqQKrHiuYdwTE/908622f5204311dbb11be9c6008ead44/Dispatch_Subnet_Logo.png',
//   primaryColor: '#A05195',
//   contracts: {
//     // teleportedErc20: {
//     //   universalId: '779672-0x80989a8F005c3445898DBD9892D3Abb96d08Cf2B',
//     //   address: '0x80989a8F005c3445898DBD9892D3Abb96d08Cf2B',
//     //   name: 'Example Teleporter Token',
//     //   symbol: 'TLP',
//     //   decimals: 18,
//     //   abi: TELEPORTED_ERC20_ABI,
//     // },
//     // bridge: {
//     //   universalId: '779672-0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
//     //   address: '0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
//     //   name: 'Teleporter ERC20 Bridge',
//     //   abi: TELEPORTER_BRIDGE_ABI,
//     // },
//   },
// } as const satisfies EvmChain;
// 
// export const ECHO_CHAIN = {
//   chainId: '173750',
//   name: 'Echo Subnet',
//   shortName: 'Echo',
//   subnetId: 'i9gFpZQHPLcGfZaQLiwFAStddQD7iTKBpFfurPFJsXm1CkTZK',
//   platformChainId: '98qnjenm7MBd8G2cPZoRvZrgJC33JGSAAKghsQ6eojbLCeRNp',
//   platformChainIdHex: '0x1278d1be4b987e847be3465940eb5066c4604a7fbd6e086900823597d81af4c1',
//   networkToken: {
//     universalId: '173750-ECH',
//     decimals: 18,
//     name: 'ECH',
//     symbol: 'ECH',
//   },
//   slug: 'echo',
//   explorerUrl: 'https://subnets-test.avax.network/echo',
//   rpcUrl: 'https://subnets.avax.network/echo/testnet/rpc',
//   faucetUrl: `${FAUCET_URL}/?subnet=echo&token=echo`,
//   isTestnet: true,
//   logoUrl:
//     'https://images.ctfassets.net/gcj8jwzm6086/7kyTY75fdtnO6mh7f0osix/4c92c93dd688082bfbb43d5d910cbfeb/Echo_Subnet_Logo.png',
//   primaryColor: '#FF7C43',
//   contracts: {
//     // teleportedErc20: {
//     //   universalId: '173750-0x80989a8F005c3445898DBD9892D3Abb96d08Cf2B',
//     //   address: '0x80989a8F005c3445898DBD9892D3Abb96d08Cf2B',
//     //   name: 'Example Teleporter Token',
//     //   symbol: 'TLP',
//     //   decimals: 18,
//     //   abi: TELEPORTED_ERC20_ABI,
//     // },
//     // bridge: {
//     //   universalId: '173750-0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
//     //   address: '0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
//     //   name: 'Teleporter ERC20 Bridge',
//     //   abi: TELEPORTER_BRIDGE_ABI,
//     // },
//   },
// } as const satisfies EvmChain;

export const TELEPORTER_CONFIG = {
  tlpMintChain: C_CHAIN,
  chains: [C_CHAIN, AVALENS_CHAIN] as const satisfies readonly EvmChain[],
} as const;

export type EvmTeleporterChain = (typeof TELEPORTER_CONFIG.chains)[number];
