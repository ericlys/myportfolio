import Image from 'next/image';
import styles from './skillcard.module.scss';

interface SkillCardProps {
  img: string;
  title: string;
}

export function SkillCard({img, title}: SkillCardProps){
  return(
    <div className={styles.container}>
      <Image width={80} height={80} src={img} alt={`${title} image`} />
      <div className={styles.title}>
        <strong>{title}</strong>
      </div>
    </div>
  )
}