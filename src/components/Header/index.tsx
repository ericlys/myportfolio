import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       <h2><strong>@</strong>EriclysMoreira</h2>
        <nav>
        <ActiveLink activeClassName={styles.active} href="/">
          <a href='#' className={styles.active}>About me</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/skills">
          <a href='#'>Skills</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/project">
          <a href='#'>Project</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/contact">
          <a href='#'>Contact</a>
        </ActiveLink>
        </nav>
      </div>
    </header>
  )
}