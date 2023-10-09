import React from 'react';
import Container from '../../atoms/Container';
import Address from './Address';
// import Waves from '../../atoms/Waves';
import styles from './index.module.css';
import Follow from './Follow';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.flexColumn}>
        <Follow />
        <Address />
      </Container>
      {/* <Waves className={styles.waves} /> */}
    </footer>
  );
}
