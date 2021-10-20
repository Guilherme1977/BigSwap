
import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { isAddress } from 'utils'
import { referreKey } from 'config/constants'

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' }} />
}

// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToHome(props: RouteComponentProps<{ ref: string }>) {
  const {
    location,
    location: { search },
    match: {
      params: { ref },
    },
  } = props

  if(ref && ref.length  > 10 && ref.indexOf('ref') === 0&& ref.split('=').length > 0  ){
    const referrer = ref.split('=')?.[1]
    if(isAddress(referrer)){
      localStorage.setItem(referreKey,referrer)
    }
  }


  return (
    <Redirect
      to={{
        ...location,
        pathname: '/',
      }}
    />
  )
}
