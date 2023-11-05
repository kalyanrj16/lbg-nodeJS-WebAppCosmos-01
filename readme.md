**Nodejs App using Web App & Cosmos DB**

Sample node.js app that gets deployed using Azure App Services. Calls Azure CosmosDB to display mortgage product information.

**Steps**
1. Update databaseId & containerId in the src/db/index.js. Get this information from Azure Cosmos DB (Azure Portal).
2. Update the Web App details in .github/workflows/azure.yml:
   - In the last step 'Deploy to Azure App Service', update app-name & publish-profile.
   - app-name is the name of the Azure App Service (Web App).
   - publish-profile is name of the repository-secret created: 
     - Download the public-profile from the Azure App Service (from the Overview tab).
     - Copy the full element with 'MSDeploy' (copy full - "<publishProfile....</publishProfile>) and create repository-secret
     - Update this name in publish-profile as ${{ secrets.REPO-SECRET }}
3. From the Web App on the portal, add Application Configuration settings
   - Add ENDPOINT & KEY variables
   - ENDPOINT should be the URL of the Cosmos DB. Get it from Overview tab of Azure Cosmos DB.
   - KEY is the Primary Key fo the Cosmos DB. Get it from Keys section.
4. Once updated and pushed to remote through main, you can see GitHub Actions triggered automatically. 


**Below is the sample output:**
-------------------------------

![image](https://github.com/kalyanrj16/lbg-nodeJS-WebAppCosmos-01/assets/113793671/7d83b11a-3399-47c6-943b-9bbf8902e9f4)
