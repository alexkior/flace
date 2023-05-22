import * as React from 'react' 
import style from './Footer.module.css'
import flaceLogo from '../../assets/flace-text-logo.svg'


export const Footer: React.FC = function () {
  
  return (
    <footer className={style.footer_wrapper}>
      <section className={style.footer}>
        <img src={flaceLogo} alt="flaceLogo" className={style.footer__logo} />

      </section>
    </footer>
  );
}
