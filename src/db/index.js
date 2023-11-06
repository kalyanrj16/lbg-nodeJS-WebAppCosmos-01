const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.ENDPOINT;
const key = process.env.KEY;
// const databaseId = "customerDetails";
const databaseId = "epcEnglandWales";
// const containerId = "ctrMortgage01";

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
// const container = database.container(containerId);


async function getMortgageData() {
  try {
    const querySpec = {
      query: "SELECT TOP 10 * FROM c"
    };
    const { resources: mortgageData } = await database.container('c').items.query(querySpec).fetchAll();
    console.log(mortgageData);  // log data to console
    return mortgageData;
  } catch (error) {
    console.error('Error fetching mortgage data:', error);
    throw error;  // re-throw the error so it can be handled by your error handling middleware
  }
}

module.exports = {
  getMortgageData,
};