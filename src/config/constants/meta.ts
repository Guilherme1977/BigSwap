import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BigBoySwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BigBoySwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BigBoySwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BigBoySwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BigBoySwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BigBoySwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BigBoySwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BigBoySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BigBoySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BigBoySwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('BigBoySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BigBoySwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BigBoySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BigBoySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BigBoySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BigBoySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BigBoySwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BigBoySwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BigBoySwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BigBoySwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BigBoySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BigBoySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('BigBoySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('BigBoySwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('BigBoySwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('BigBoySwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('BigBoySwap')}`,
      }
    default:
      return null
  }
}
