import Link from 'next/link';
import styles from './socialcard.module.scss';
import { IconType } from 'react-icons/lib';

interface SocialCardProps {
  text: string;
  href?: string;
  icon?: IconType;
}

export function SocialCard({text, href, icon: Icon}: SocialCardProps){
  if(!href) {
    return (
      <span className={styles.container}>
        {Icon && <Icon size={38}/>}
        <strong>{ text }</strong>
      </span>
    )
  }

  return (
      <Link href={href} passHref={true}>
        <a className={styles.container} target="_blank">
          {Icon && <Icon size={38}/>}
          <strong>{ text }</strong>
        </a>
      </Link>
  );
}