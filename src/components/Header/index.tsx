import TextSpinner from 'components/TextSpinner';
import LAMBROBNB_CONTRACT_ABI from 'contracts/0x2ce39156176188f19cc8c78136df3e703c51b506.json';
import { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';

import styles from './styles.module.css';

const LAMBROBNB_CONTRACT_ADDRESS = '0x2ce39156176188f19cc8c78136df3e703c51b506';

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
  Error = 'price.state.error',
}

const Price = () => {
  const [price, setPrice] = useState(null);
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
      const contract = new web3.eth.Contract(
        LAMBROBNB_CONTRACT_ABI as any,
        LAMBROBNB_CONTRACT_ADDRESS,
      );

      (async () => {
        try {
          const reserves = await contract.methods.getReserves().call();
          const LAMBRO = reserves[0] / 10 ** 18;
          const BNB = reserves[1] / 10 ** 18;

          if (!LAMBRO || !BNB) {
            setState(State.Error);
            return;
          }

          const response = await fetch(
            'https://api.coinpaprika.com/v1/tickers/bnb-binance-coin',
          );
          const data = await response.json();
          const BNBUSD = data?.quotes?.USD?.price;

          if (!BNBUSD) {
            setState(State.Error);
            return;
          }

          const LAMBROUSD = BNBUSD * (BNB / LAMBRO);
          if (typeof LAMBROUSD !== 'number') {
            setState(State.Error);
            return;
          }

          setPrice(LAMBROUSD);
        } catch {
          setState(State.Error);
        }
      })();
    }
  }, [state, web3]);

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
    <header className={styles.header}>
      {state === State.Loading && <TextSpinner />}
      {state === State.Connected && !price && <TextSpinner />}
      {state === State.Error && <TextSpinner />}
      {state === State.MetaMaskMissing && (
        <a onClick={onMetaMaskMissingClick}>Fetch Price</a>
      )}
      {state === State.NotBinanceSmartChain && (
        <a onClick={onNotBinanceSmartChainClick}>Fetch Price</a>
      )}
      {price && (
        <>
          <span>1 LAMBRO = ${price.toFixed(6)}</span>
        </>
      )}
    </header>
  );
};

export default Price;
