// Import required AWS SDK clients and commands for Node.js
import {ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns";
import {snsClient } from "../libs/snsClient.js";

// Set the parameters
const params = { TopicArn: "arn:aws:sns:us-east-2:754475587018:Queue-Notifications" }; //TOPIC_ARN


const run = async () => {
  try {
    const data = await snsClient.send(new ListSubscriptionsByTopicCommand(params));
    console.log("Success.",  data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
export {run}
// run();

