import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       <h2><strong>@</strong>EriclysMoreira</h2>
        <nav>
          <a href='#' className={styles.active}>About me</a>
          <a href='#'>Skills</a>
          <a href='#'>Project</a>
          <a href='#'>Contact</a>
        </nav>
      </div>
    </header>
  )
}