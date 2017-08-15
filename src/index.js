import React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3";
import { setup, getConfig, createVault } from "@melonproject/melon.js";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

window.addEventListener("load", () => {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(window.web3.currentProvider);
    console.log("Found injected web3");
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545"),
    );
  }
  setup.init({
    web3: window.web3,
    daemonAddress: "0x00360d2b7D240Ec0643B6D819ba81A09e40E5bCd",
  });
  getConfig().then(res => {
    console.log("melon.js config ", res);
  });
  window.createVault = createVault;
  // Now you can start your app & access web3 freely:
  ReactDOM.render(<App />, document.getElementById("root"));
});

registerServiceWorker();
