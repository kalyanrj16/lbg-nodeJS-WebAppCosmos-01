const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.ENDPOINT;
const key = process.env.KEY;
const databaseId = "customerDetails";
const containerId = "ctrMortgage01";

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

async function getMortgageData() {
  const { resources: mortgageData } = await container.items.query("SELECT * FROM c").fetchAll();
  return mortgageData;
}

module.exports = {
  getMortgageData,
};