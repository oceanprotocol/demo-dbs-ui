export type ConfigType = {
  UPLOADER_URL: string;
  UPLOADER_ACCOUNT: string;
  INFURA_ID: string;
  WALLET_CONNECT_PROJECT_ID: string;
  magicApiKey: string;
  githubRepo: string;
  chainId: number;
  rpcUrl: string;
  oceanNetwork: {
    contract: string;
    networkDecimals: number;
  };
};

const config: ConfigType = {
  UPLOADER_URL: process.env.NEXT_PUBLIC_UPLOADER_URL || 'https://api.uploader.oceanprotocol.com',
  UPLOADER_ACCOUNT:
    process.env.NEXT_PUBLIC_UPLOADER_ACCOUNT ||
    '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d',
  INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID || '',
  WALLET_CONNECT_PROJECT_ID:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  magicApiKey:
    process.env.NEXT_PUBLIC_MAGIC_API_KEY || 'pk_live_3EA01B119E287F11',
  githubRepo: 'https://github.com/oceanprotocol/uploader-ui',
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '', 10) || 80001,
  rpcUrl:
    process.env.NEXT_PUBLIC_RPC_URL || 'https://rpc-mumbai.maticvigil.com/',
  oceanNetwork: {
    contract:
      process.env.EXPO_PUBLIC_OCEAN_CONTRACT ||
      '0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8',
    networkDecimals: 18,
  },
};

export default config;
