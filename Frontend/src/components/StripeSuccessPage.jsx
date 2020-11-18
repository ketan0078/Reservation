import { Button } from '@material-ui/core'
import React from 'react'
import {useHistory} from 'react-router-dom'

const StripeSuccessPage = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Your Payment is successful. Your Room will be ready shortly. 
                <Button onClick={() => {
                    history.push("/home")
                }} >Go back Home</Button>
            </h1>
        </div>
    )
}

export default StripeSuccessPage
