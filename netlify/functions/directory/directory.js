import { freelancers } from "../../../src/_data/directory"
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const apiKey = event.queryStringParameters.apiKey
    if(apiKey && apiKey === process.env.directoryApiKey) {
      return {
        statusCode: 200,
        body: JSON.stringify(freelancers)
      }
    }
    return {
      statusCode: 403,
      body: JSON.stringify({
        "Error": "Not Authorized"
      })
    }


  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
