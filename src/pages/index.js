import React, {useState } from "react"
import {run} from "../util/awsAPI"
import {setCredentials} from "../util/set_credentials"


function Homepage() {
    setCredentials();
    run();
    const [eSub, setESub] = useState("Subscribe");
    const [pSub, setPSub] = useState("Subscribe");
    const [SM, setSM] = useState("Send Message");
    

    return (
      <div className="homepage-wrapper"> 
        <h1>Amazon SNS Demo</h1>
        <div className="grid-master">
            <div className="column1">
                <h2> Email Subscription</h2>
                <input type="text" placeholder="Enter Your Email Address"></input>
                <button> {eSub} </button>
            </div>
            <div className="column2">
                <h2> SMS Subscription</h2>
                <input type="text" placeholder="Enter Your Phone Number"></input>
                <button> {pSub} </button>
            </div>
            <div className="column3">
                <h2> Send Notification</h2>
                <textarea placeholder="Enter Your Notification Message"></textarea>
                <button> {SM} </button>
            </div>
        </div>
      </div>
    )
}

export default Homepage;