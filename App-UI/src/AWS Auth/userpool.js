import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_cNeTyz82T",
  ClientId: "55757naev6g1daa3lc2qhq1bqa",
};

export default new CognitoUserPool(poolData);
