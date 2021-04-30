import ProofOfBurn from 'components/ProofOfBurn';
import { MouseEvent, useCallback, useEffect, useState } from 'react';

import styles from './styles.module.css';

const Footer = () => {
  const [proofOfBurnVisible, setProofOfBurnVisible] = useState(false);

  const onBurnClick = useCallback((e: MouseEvent<unknown>) => {
    e.preventDefault();

    setProofOfBurnVisible(true);
  }, []);

  const onHide = useCallback(() => {
    setProofOfBurnVisible(false);
  }, []);

  useEffect(() => {
    if (proofOfBurnVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [proofOfBurnVisible]);

  return (
    <>
      {proofOfBurnVisible && <ProofOfBurn onHide={onHide} />}
      <footer className={styles.footer}>
        <nav>
          <a href="whitepaper.pdf" target="_blank" rel="noreferrer">
            Whitepaper
          </a>
          <a
            href="https://bscscan.com/token/0x9685208eb8Daf44578c0da4257A5f0E5a6ef97e6"
            target="_blank"
            rel="noreferrer"
          >
            Token
          </a>
          <a onClick={onBurnClick}>Burn</a>
        </nav>
        <nav>
          <a href="https://t.me/lambrofinance" target="_blank" rel="noreferrer">
            Telegram Channel
          </a>
          <a
            href="https://t.me/lambrofinancechat"
            target="_blank"
            rel="noreferrer"
          >
            Telegram Group Chat
          </a>
          <a
            href="https://twitter.com/lambrofinance"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/lambrofinance"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
