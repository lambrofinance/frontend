import { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';

import TextSpinner from './TextSpinner';

declare global {
  interface Window {
    web3?: { currentProvider: any };
  }
}

enum State {
  Loading = 'price.state.loading',
  Connected = 'price.state.connected',
  MetaMaskMissing = 'price.state.metamask-missing',
  NotBinanceSmartChain = 'price.state.not-binance-smart-chain',
}

const Price = () => {
  const [state, setState] = useState(State.Loading);
  const [web3, setWeb3] = useState<Web3>(null);

  useEffect(() => {
    if (!window.web3) {
      setState(State.MetaMaskMissing);
      return;
    }

    setWeb3(new Web3(window.web3.currentProvider));
  }, []);

  useEffect(() => {
    if (!web3) {
      return;
    }

    (async () => {
      const chainId = await web3.eth.getChainId();

      if (chainId !== 56) {
        setState(State.NotBinanceSmartChain);
        return;
      }

      setState(State.Connected);
    })();
  }, [web3]);

  useEffect(() => {
    console.log(state);

    if (state === State.Connected) {
      console.log('todo: read smart contract');
    }
  }, [state]);

  const onMetaMaskMissingClick = useCallback(
    () =>
      alert('To view the price, the MetaMask plugin needs to be installed.'),
    [],
  );

  const onNotBinanceSmartChainClick = useCallback(
    () =>
      alert(
        'To view the price, please connect to Binance Smart Chain mainnet.',
      ),
    [],
  );

  return (
    <span>
      {state === State.Loading && <TextSpinner />}
      {state === State.MetaMaskMissing && (
        <a onClick={onMetaMaskMissingClick}>Price</a>
      )}
      {state === State.NotBinanceSmartChain && (
        <a onClick={onNotBinanceSmartChainClick}>Price</a>
      )}
    </span>
  );
};

export default Price;
