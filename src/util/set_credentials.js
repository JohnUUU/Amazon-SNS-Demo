import * as AWS from "aws-sdk";

function setCredentials() {
    // // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //     IdentityPoolId: 'us-east-1:0cd8750f-be11-4e1a-bf05-49d286474a1d',
    // });
    // AWS.config.credentials.refresh();
    AWS.config.update({
        region: 'us-east-1', 
        apiVersion: 'latest',
        accessKeyId: "ENTER ACCESS KEY",
        secretAccessKey: "ENTER SECRET ACCESS KEY"
    });
    console.log(AWS.config)
    
    
    // AWS.config.credentials.get(function(){
    //     // Credentials will be available when this function is called.
    //     const accessKeyId = AWS.config.credentials.accessKeyId;
    //     const secretAccessKey = AWS.config.credentials.secretAccessKey;
        
    // });

    
}

export {setCredentials};