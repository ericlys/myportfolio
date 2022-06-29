import { ActiveLink } from '../ActiveLink';
import styles from './header.module.scss';
import { House, ListChecks, PaperPlaneTilt, Wrench } from 'phosphor-react';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       <h2><strong>@</strong>EriclysMoreira</h2>
        <nav>
        <ActiveLink activeClassName={styles.active} href="/">         
          <a href='#' className={styles.active}>
            <House size={32}/>
            <span>About me</span>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/skills">
          <a href='#'>
            <Wrench size={32} />
            <span>Skills</span>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/project">
          <a href='#'>
            <ListChecks size={32} />
            <span>Project</span>
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/contact">
          <a href='#'>
            <PaperPlaneTilt size={32} /> 
            <span>Contact</span>
          </a>
        </ActiveLink>
        </nav>
      </div>
    </header>
  )
}