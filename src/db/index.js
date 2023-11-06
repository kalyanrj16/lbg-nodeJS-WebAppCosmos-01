const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.ENDPOINT;
const key = process.env.KEY;
const containerId = 'Items';

const client = new CosmosClient({ endpoint, key });

async function getMortgageData(databaseName) {
  try {
    const database = client.database(databaseName);
    const container = database.container(containerId);
    const querySpec = {
      query: "SELECT TOP 5 * FROM c"
    };
    const { resources } = await container.items.query(querySpec).fetchAll();
    return resources;
  } catch (e) {
    e.type = 'DatabaseError';
    throw e;
  }
}

module.exports = {
  getMortgageData
};