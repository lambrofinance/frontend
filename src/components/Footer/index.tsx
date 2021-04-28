import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <nav>
      <a href="whitepaper.pdf" target="_blank" rel="noreferrer">
        Whitepaper
      </a>
    </nav>
    <nav>
      <a
        href="https://twitter.com/lambrofinance"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      <a href="https://t.me/lambrofinance" target="_blank" rel="noreferrer">
        Telegram
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
);

export default Footer;
