import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import { referreKey } from 'config/constants'
import { isAddress } from 'utils'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}



export const stakeFarm = async (masterChefContract, pid, amount) => {

  const referrer = localStorage.getItem(referreKey)

  let refAddress = '0x0000000000000000000000000000000000000000'

  if(referrer && isAddress(referrer)){
    refAddress =  referrer;
  }

  console.log('stakeFarm:referrer',referrer,refAddress)

  const gasPrice = getGasPrice()
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  if (pid === 0) {
    const tx = await masterChefContract.enterStaking(value, refAddress,{ ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.deposit(pid, value,refAddress, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  if (pid === 0) {
    const tx = await masterChefContract.leaveStaking(value, { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.withdraw(pid, value, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (masterChefContract, pid) => {
  const gasPrice = getGasPrice()
  if (pid === 0) {
    const tx = await masterChefContract.leaveStaking('0', { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }



  const refAddress = '0x0000000000000000000000000000000000000000'

  // const referrer = localStorage.getItem(referreKey)

  // if(referrer && isAddress(referrer)){
  //   refAddress =  referrer;
  // }

  // console.log('stakeFarm:referrer',referrer,refAddress)

  const tx = await masterChefContract.deposit(pid, '0',refAddress, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}
