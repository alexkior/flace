import * as React from 'react' 
import styles from './Header.module.css'
import flaceLogo from '../../assets/flace-text-logo.svg'


export const Header: React.FC = function () {
  
  return (
    <header className={styles.header_wrapper}>
      <section className={styles.header}>
        <img src={flaceLogo} alt="flaceLogo" className={styles.header__logo} />

      </section>
    </header>
  );
}
