import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.bbc,
    earningToken: serializedTokens.bbc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDAe380b4Fe31F23fcd98ce52D9e269E94116c589',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00099',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 221,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.nft,
  //   contractAddress: {
  //     97: '',
  //     56: '0x8d018823d13c56d62ffb795151a9e629c21e047b',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '173727',
  // },
  ]

export default pools
