import { MouseEvent, useCallback, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

import styles from './styles.module.css';

interface Props {
  onHide: () => void;
}

const SecurityModal = (props: Props) => {
  const { onHide } = props;
  const backdrop = useRef(null);

  const onBackdropClick = useCallback(
    (e: MouseEvent<unknown>) => {
      if (e.target === backdrop.current) {
        onHide();
      }
    },
    [backdrop, onHide],
  );

  return (
    <div
      className={styles.proofOfBurn}
      onClick={onBackdropClick}
      ref={backdrop}
    >
      <div>
        <button onClick={onHide}>
          <IoClose />
        </button>
        <h2>Security</h2>

        <h3>Token contract</h3>
        <a
          href="https://bscscan.com/address/0x9685208eb8daf44578c0da4257a5f0e5a6ef97e6"
          target="_blank"
          rel="noreferrer"
        >
          0x9685208eb8daf44578c0da4257a5f0e5a6ef97e6
        </a>

        <h3>Mint TX</h3>
        <a
          href="https://bscscan.com/tx/0xe137c92122b0234da1222d5e5bae2a3e395214b14aa29db84f1e1f332170363c"
          target="_blank"
          rel="noreferrer"
        >
          0xe137c92122b0234da1222d5e5bae2a3e395214b14aa29db84f1e1f332170363c
        </a>

        <h3>PCS liquidity TX</h3>
        <a
          href="https://bscscan.com/tx/0xcdc94ebd7a1fcd17cec7a7419e4e57236d5df46b5427677776b5391778328911"
          target="_blank"
          rel="noreferrer"
        >
          0xcdc94ebd7a1fcd17cec7a7419e4e57236d5df46b5427677776b5391778328911
        </a>

        <h3>PCS liquidity lock TX</h3>
        <a
          href="https://bscscan.com/tx/0xaf24dfab44d64ed8328de64a92a9fbe28080a752961d7e9d522b78e1a0a7b1b4"
          target="_blank"
          rel="noreferrer"
        >
          0xaf24dfab44d64ed8328de64a92a9fbe28080a752961d7e9d522b78e1a0a7b1b4
        </a>

        <h3>Renounce ownership TX</h3>
        <a
          href="https://bscscan.com/tx/0xc3771bca578cd9f91dfb312a1484dca452c5e30915eb26277aaf058ee6774a8f#eventlog"
          target="_blank"
          rel="noreferrer"
        >
          0xc3771bca578cd9f91dfb312a1484dca452c5e30915eb26277aaf058ee6774a8f
        </a>
      </div>
    </div>
  );
};

export default SecurityModal;
