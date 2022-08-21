<div align="center">
  <img src="./src/assets/Pondo.png" alt="Pondo" height="70">
  <h2>A crowdfunding for the open community.</h2>
</div>
 
</br>
</br>
 Pondo (<i>n. suskrisyon, suskripsyon, bayad, pagpapahatid, pagpapadala</i>) is a decentralized crowdfunding application built on the ethereum network.
 It allows a trustless and transparent transaction between donors and beneficiearies all made posible through the smart contracts and the open nature of blockchain. 
 
</div>
<div>
    <h2>Tools Used</h2>
    <ul>
        <li><a href="https://github.com/ethers-io/ethers.js/">EthersJS</a></li>
        <li><a href="https://web3.storage/">Web3.Storage</a></li>
        <li><a href="https://hardhat.org">Hardhat</a></li>
        <li><a href="https://soliditylang.org">Solidity</a></li>
        <li><a href="https://vitejs.dev/">Vite</a></li>
        <li><a href="https://reactjs.org">ReactJS</a></li>
        <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    </ul>
</div>

<div>
   <h2>Compling Instructions</h2>
   <h3>Clone the repository</h3>
   In your prefered working directory open a terminal and type:
   <br><br>
  
    https://github.com/m-visaya/pondo.git
  
   <h3>Install the dependencies</h3>
   Install the frontend and backend modules
   <br><br>
  
    ./npm install
    ./smart_contract/npm install
  
   <h3>Configure environment variables</h3>
   Create a .env file in the root of the directory and include the API key for your web3.storage:
   <br><br>
  
    VITE_WEB3KEY="web3.API.key"
  
  
   <h3>Initialize the workspace</h3>
   To initialize the workspace open three (3) separate terminal and provide each one of the commands below
   <br><br>
  
     ./npm run dev
     ./smart-contract/npx hardhat node 
     ./smart-contract/npx hardhat run scripts/deploy.js --network localhost


The commands above will assign the frontend url and creates a ethereum testnet in the local network, 10 test accounts is available for development use. Import these test accounts in a development wallet and start througth the frontend url 
   
</div>

<div>
    <h2>License</h2>
    Distributed under the GPL3 License. See LICENSE for more information.
</div>
