import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
export default function Checkout({subtotal}){


    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading, error, success} = orderstate
      const dispatch = useDispatch() 
     
      function tokenHander(token)
      {
          console.log(token);
          dispatch(placeOrder(token , subtotal))
      }
      return(
          <div>

              {loading && (<Loading/>)}
              {error && (<Error error='Something went wrong'/>)}
              {success && (<Success success='Your order placed successfully'/>)}
           
           <StripeCheckout
           amount={subtotal*100}
           shippingAddress
           stripeKey='pk_test_51IvGwgSCqlQYbCrFWDxgDyue9MR5w4DFPWe60dv8avaLpmijxOepbkhMar4xTgUBflvkabrkbdfd8X7PHGBz5nqB00FtkLl8VP'
           token={tokenHander}
           currency='INR'
           
           >
            <button className='btn'>Pay Now</button>
           </StripeCheckout>



          </div>
      )
}