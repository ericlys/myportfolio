import Image from 'next/image';
import Link from 'next/link';
import styles from './projectcard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  tecs: string[];
  image?: string;
  repository: string;
}

interface Props {
  data: ProjectCardProps;
}

export function ProjectCard({ data }: Props){
  return (
    <Link href={data.repository}>
      <a target="_blank" className={styles.container}>
        <header>
          { data.image ? 
            <Image 
            layout='fill'
            objectFit='cover'
            src={data.image} 
            alt="project img"
            />
            :
            <Image 
            layout='fill'
            objectFit='cover'
            src="/app-development-illustration.png" 
            alt="project img"
            />
          }
        </header>
        <main className={styles.content}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <span> 
              { data.tecs && data.tecs.map(tec => 
              
              `${tec} | `
              )} 
            </span>
        </main>
      </a>
    </Link>
  );
}