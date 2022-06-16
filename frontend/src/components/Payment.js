import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'

import whiteflag from "../white_flag/whiteflag"
import {handleToken} from '../actions/index'

const Payment = () => {
    const dispatch = useDispatch()

  return (
    <StripeCheckout 
        name="Emaily"
        description='$5 for 5 email credits'
        amount={500}
        token={token=>dispatch(handleToken(token))}
        stripeKey={whiteflag.stripepublicKey}
    >
        <button className='btn'>
            Add Credits
        </button>
    </StripeCheckout>
  )
}

export default Payment