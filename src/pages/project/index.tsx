import { ProjectCard } from '../../components/ProjectCard';
import styles from './project.module.scss';

interface project {
  title: string;
  description: string;
  tecs: string[];
  image?: string;
  repository: string;
}

export default function Project(){

  const projects: project[] = [
    {
      title: 'dt money',
      description: 'O dtmoney é uma aplicação de controle de finanças pessoais.',
      image: 'https://github.com/ericlys/ignite_react-js/raw/main/02-dtmoney/.github/dtmoney.gif',
      tecs: [
       'ReactJS', 'Styled-Components', 'TypeScript', 'MirageJS',
      ],
      repository: 'https://github.com/ericlys/ignite_react-js/tree/main/02-dtmoney'
    },
    {
      title: 'ig.news',
      description: 'O projeto consiste em uma aplicação (JAMStack) de assinatura de conteúdo de texto (posts). Desenvolvido utilizando APIs externas como Stripe (controle de pagamento), FaunaDB (como banco de dados) e Prismic (CMS).',
      image: 'https://github.com/ericlys/ignite_react-js/raw/main/03-ignews/.github/ignews.gif',
      tecs: [
       'ReactJS', 'Typescript', 'NextJS', 'FaunaDB', 'Axios', 'Prismic', 'Stripe', 'Sass', 'ESLint', 'Prettier', 'Jest'
      ],
      repository: 'https://github.com/ericlys/ignite_react-js/tree/main/03-ignews'
    },
    {
      title: 'to.do',
      description: ' O projeto consiste em adicionar, marcar e remover To Do`s.',
      image: 'https://user-images.githubusercontent.com/30418565/160101130-6880bea1-3b02-4058-b883-fd1c0a6f9909.png',
      tecs: [
       'ReactJS', 'SASS', 'TypeScript',
      ],
      repository: 'https://github.com/ericlys/Desafio-01-ignite-reactjs-conceitos-do-react'
    },
    {
      title: 'Rocketshoes',
      description: 'A Rocketshoes é uma loja de calçados, nele foi trabalhado o gerenciamento de um carrinho de compras.',
      image: 'https://github.com/ericlys/Desafio-01-M2-reactjs-criando-um-hook-de-carrinho-de-compras/raw/master/.github/rocketshoes.gif',
      tecs: [
       'ReactJS', 'JSON Server', 'TypeScript',
      ],
      repository: 'https://github.com/ericlys/Desafio-01-M2-reactjs-criando-um-hook-de-carrinho-de-compras'
    },
    {
      title: 'GoRestaurant',
      description: 'Site de gerenciamento de pratos italianos.',
      image: 'https://github.com/ericlys/Desafio-02-M2-reactjs-refactoring-classes-ts/raw/master/.github/GoRestaurant.gif',
      tecs: [
       'ReactJS', 'JSON Server', 'TypeScript',
      ],
      repository: 'https://github.com/ericlys/Desafio-02-M2-reactjs-refactoring-classes-ts'
    },
    {
      title: 'Spacetraveling',
      description: 'Blog',
      image: 'https://github.com/ericlys/Desafio-01-M3-reactjs-criando-um-projeto-do-zero/raw/master/.github/spacetraveling.gif',
      tecs: [
       'ReactJS', 'TypeScript', 'NextJS', 'Prismic', 'Sass', 'ESLint', 'Prettier',
      ],
      repository: 'https://github.com/ericlys/Desafio-01-M3-reactjs-criando-um-projeto-do-zero'
    },
    {
      title: 'Worldtrip',
      description: 'Projeto mostra os melhores pontos turísticos em cada país de cada continente.',
      image: 'https://github.com/ericlys/Desafio-01-M4-reactjs-Interface-com-ChakraUI/raw/main/.github/worldtrip.gif',
      tecs: [
       'ReactJS', 'TypeScript', 'NextJS', 'Sass', 'ESLint', 'Json-Server', 'ChakraUI'
      ],
      repository: 'https://github.com/ericlys/Desafio-01-M4-reactjs-Interface-com-ChakraUI'
    },
    {
      title: 'Upfi',
      description: 'Projeto de upload de imagens.',
      image: 'https://github.com/ericlys/Desafio-02-M4-reactjs-upload-de-imagens/raw/master/.github/upfi.gif',
      tecs: [
       'ReactJS', 'TypeScript', 'NextJS', 'Sass', 'ChakraUI', 'React Query', 'React Hook Form', 'FaunaDB', 'ImgBB'
      ],
      repository: 'https://github.com/ericlys/Desafio-02-M4-reactjs-upload-de-imagens'
    },
    {
      title: 'WatchMe',
      description: 'O projeto consiste em listar filmes de uma API fake, utilizando o JSON Server e componentização de toda a aplicação.',
      image: 'https://github.com/ericlys/Desafio-02-M1-ignite-componentizando-a-aplicacao/raw/main/.github/watchme.gif',
      tecs: [
       'ReactJS', 'TypeScript', 'JSON Server'
      ],
      repository: 'https://github.com/ericlys/Desafio-02-M1-ignite-componentizando-a-aplicacao'
    },
    {
      title: 'MySkills',
      description: 'Uma simples aplicação para adicionar habilidades.',
      image: 'https://github.com/ericlys/myskills/raw/main/.github/myskills.gif',
      tecs: [
       'React Native', 'TypeScript'
      ],
      repository: 'https://github.com/ericlys/myskills'
    },
    {
      title: 'to.do - React Native',
      description: 'to.do é um aplicativo de lembrete de tarefas onde você pode adicionar, remover, marcar como concluídos e editar tarefas.',
      image: 'https://github.com/ericlys/react-native-todos/raw/main/.github/todos.gif',
      tecs: [
       'React Native', 'TypeScript'
      ],
      repository: 'https://github.com/ericlys/react-native-todos'
    },
    {
      title: 'Gofinances',
      description: 'O Gofinances é um aplicativo mobile desenvolvido para te auxiliar na gestão financeira, onde o usuário pode cadastrar entradas e saídas, podendo obter um resumo e um gráfico para melhor visualização dos gastos ordenados por categoria.',
      image: 'https://github.com/ericlys/gofinances/raw/main/.github/gofinances.gif',
      tecs: [
       'React Native', 'TypeScript', 'Expo', 'Styled Components',
      ],
      repository: 'https://github.com/ericlys/gofinances'
    },
    {
      title: 'SavePass',
      description: 'SavePass é um aplicativo móvel que ajuda os usuários a gerenciar senhas para suas contas em sites ou redes sociais.',
      image: 'https://github.com/ericlys/savepass/raw/main/.github/savepass.gif',
      tecs: [
       'React Native', 'TypeScript', 'Expo', 'Styled Components',
      ],
      repository: 'https://github.com/ericlys/savepass'
    },
    {
      title: 'Stream.data',
      description: 'O Stream.data é um aplicativo que possui login social com o Twitch, listando todos os streams ativos que o usuário segue, além de mostrar uma lista dos canais mais assistidos no momento.',
      image: 'https://github.com/ericlys/react-native-stream-data/raw/master/.github/stream_data.gif',
      tecs: [
       'React Native', 'TypeScript', 'Expo', 'OAuth', 'Styled Components',
      ],
      repository: 'https://github.com/ericlys/react-native-stream-data'
    },
    {
      title: 'rentx',
      description: 'Aplicativo de aluguel de veículo. (Em desenvolvimento...)',
      tecs: [
       'React Native', 'TypeScript', 'Expo', 'Styled Components'
      ],
      repository: 'https://github.com/ericlys/rentx'
    },
  ]

  return(
    <main className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.content}>
        { projects && projects.map( project =>
            <ProjectCard data={project} key={project.title}/>
          )}
      </div>
    </main>
  )
}