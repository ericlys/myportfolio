import { SkillCard } from '../../components/SkillCard'
import styles from './skills.module.scss'

interface skill {
  title: string;
  img: string;
}

export default function Contact(){
  const mainSkills: skill[] = [
    {title: 'ReactJs', img: '/images/react.svg'},
    {title: 'Next.js', img: '/images/next-js.svg'},
    {title: 'React Native', img: '/images/react-native.svg'},
    {title: 'Typescript', img: '/images/typescript.svg'},
    {title: 'Javascript', img: '/images/javascript.svg'},
    {title: 'Styled Components', img: '/images/styled-components.svg'},
  ]
  const otherSkills: skill[] = [
    {title: 'Node.js', img:'/images/nodejs.svg'},
    {title: 'Angular', img:'/images/angular.svg'},
    {title: 'Git', img:'/images/git.svg'},
    {title: 'Docker', img:'/images/docker.svg'},
    {title: 'Jest', img:'/images/jest.svg'},
    {title: 'Spring Boot', img:'/images/spring.svg'},
    {title: 'PostgreSQL', img:'/images/postgresql.svg'},
    {title: 'MongoDB', img:'/images/mongodb.svg'},
    {title: 'Redis', img:'/images/redis.svg'},
  ];

  return(
    <main className={styles.container}>
      <h1>Main</h1>

      <div className={styles.listSkills}>
        {mainSkills && mainSkills.map(skill => 
            <SkillCard key={skill.title} img={skill.img} title={skill.title}/>
        )}
      </div>


      <h1>Others</h1>
      <div className={styles.listSkills}>
        {otherSkills && otherSkills.map(skill => 
            <SkillCard key={skill.title} img={skill.img} title={skill.title}/>
        )}
      </div>
    </main>
  )
}