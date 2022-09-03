import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

const connector = new InjectedConnector({
  supportedChainIds: [
    5, // Goerly
  ],
});

const getLibrary = (provider: any) => {
  return new Web3(provider);
};

export { connector, getLibrary };