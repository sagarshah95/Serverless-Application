// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'gv2g6h7cjh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`
//https://gv2g6h7cjh.execute-api.us-east-2.amazonaws.com/dev
export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-4xz4629l.us.auth0.com',            // Auth0 domain
  clientId: 'Dbxw3KjulDlltklAPqugtvIEHYXVUoTW',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
