import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <nav>
      <a
        href="https://bscscan.com/tx/0xe137c92122b0234da1222d5e5bae2a3e395214b14aa29db84f1e1f332170363c"
        target="_blank"
        rel="noreferrer"
      >
        Mint TX
      </a>
      <a
        href="https://bscscan.com/tx/0xcdc94ebd7a1fcd17cec7a7419e4e57236d5df46b5427677776b5391778328911"
        target="_blank"
        rel="noreferrer"
      >
        LP TX
      </a>
      <a
        href="https://bscscan.com/tx/0xaf24dfab44d64ed8328de64a92a9fbe28080a752961d7e9d522b78e1a0a7b1b4"
        target="_blank"
        rel="noreferrer"
      >
        LP-token Burn TX
      </a>
      <a
        href="https://bscscan.com/tx/0xc3771bca578cd9f91dfb312a1484dca452c5e30915eb26277aaf058ee6774a8f"
        target="_blank"
        rel="noreferrer"
      >
        Admin Burn TX
      </a>
    </nav>
    <nav>
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
