import {
  Forklift,
  GraduationCap,
  Landmark,
  Newspaper,
  Smartphone,
  TrainFront,
} from 'lucide-react'
import type { FC, ReactNode, SVGProps } from 'react'

export type ProjectType = 'Freelance' | 'Personal' | 'Company'

export type Platform = 'Web App' | 'Mobile App' | 'Desktop App'

type Tech = {
  name: string
  link: string
  image: string
}

export type DetailProject = {
  platform: Platform
  duration: string
  tech: Array<Tech>
  role: string
  type: ProjectType
  images: string
  company?: string
}

export type Project = {
  id: string
  title: string
  description: string
  href: string
  cta: string
  Icon: FC<SVGProps<SVGSVGElement>>
  background: ReactNode
  details: DetailProject
}

export const projects: Array<Project> = [
  {
    id: 'pharmachist-1',
    title: "I'm Pharmachist",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: GraduationCap,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'August 2023 - November 2023',
      tech: [
        {
          name: 'JavaScript',
          link: 'https://www.javascript.com/',
          image: '/svg/logo-javascript.svg',
        },
        {
          name: 'PHP',
          link: 'https://www.php.net/',
          image: '/svg/logo-php.svg',
        },
        {
          name: 'MySQL',
          link: 'https://www.mysql.com/',
          image: '/svg/logo-mysql.svg',
        },
        {
          name: 'Laravel',
          link: 'https://laravel.com/',
          image: '/svg/logo-laravel.svg',
        },
        {
          name: 'JQuery',
          link: 'https://jquery.com/',
          image: '/svg/logo-jquery.svg',
        },
        {
          name: 'Bootstrap',
          link: 'https://getbootstrap.com/',
          image: '/svg/logo-bootstrap.svg',
        },
      ],
      role: 'Frontend Developer',
      type: 'Freelance',
      images: '/images/example.png',
    },
  },
  {
    id: 'ceisa-1',
    title: 'CEISA 4.0',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: Landmark,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'September 2023 - December 2024',
      tech: [
        {
          name: 'JavaScript',
          link: 'https://www.javascript.com/',
          image: '/svg/logo-javascript.svg',
        },
        {
          name: 'Java',
          link: 'https://www.java.com/',
          image: '/svg/logo-java.svg',
        },
        {
          name: 'Ant Design',
          link: 'https://ant.design/',
          image: '/svg/logo-antdesign.svg',
        },
        {
          name: 'React',
          link: 'https://reactjs.org/',
          image: '/svg/logo-react.svg',
        },
        {
          name: 'Spring Boot',
          link: 'https://spring.io/projects/spring-boot',
          image: '/svg/logo-spring.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Elasticsearch',
          link: 'https://www.elastic.co/elasticsearch/',
          image: '/svg/logo-elasticsearch.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'Kubernetes',
          link: 'https://kubernetes.io/',
          image: '/svg/logo-kubernetes.svg',
        },
        {
          name: 'GitLab CI/CD',
          link: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
          image: '/svg/logo-gitlab.svg',
        },
        {
          name: 'Jira',
          link: 'https://www.atlassian.com/software/jira',
          image: '/svg/logo-jira.svg',
        },
      ],
      role: 'Fullstack Developer',
      type: 'Company',
      images: '/images/example.png',
      company: 'PT Nutech Integrasi',
    },
  },
  {
    id: 'kuatbaca-1',
    title: 'Kuat Baca',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: Newspaper,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'February 2024 - April 2025',
      tech: [
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: '/svg/logo-typescript.svg',
        },
        {
          name: 'Material UI',
          link: 'https://mui.com/',
          image: '/svg/logo-mui.svg',
        },
        {
          name: 'React',
          link: 'https://reactjs.org/',
          image: '/svg/logo-react.svg',
        },
        {
          name: 'Next.js',
          link: 'https://nextjs.org/',
          image: '/svg/logo-nextjs.svg',
        },
        {
          name: 'Strapi',
          link: 'https://strapi.io/',
          image: '/svg/logo-strapi.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'GitLab CI/CD',
          link: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
          image: '/svg/logo-gitlab.svg',
        },
      ],
      role: 'Software Engineer',
      type: 'Freelance',
      images: '/images/example.png',
    },
  },
  {
    id: 'executive-dashboard-1',
    title: 'Executive Dashboard',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: TrainFront,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'September 2024 - December 2024',
      tech: [
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: '/svg/logo-typescript.svg',
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          image: '/svg/logo-nodejs.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'GitLab CI/CD',
          link: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
          image: '/svg/logo-gitlab.svg',
        },
      ],
      role: 'Backend Developer',
      type: 'Company',
      images: '/images/example.png',
      company: 'PT Nutech Integrasi',
    },
  },
  {
    id: 'glid-logistics-1',
    title: 'GLID: Logistics System',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: Forklift,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'September 2024 - December 2024',
      tech: [
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: '/svg/logo-typescript.svg',
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          image: '/svg/logo-nodejs.svg',
        },
        {
          name: 'Next.js',
          link: 'https://nextjs.org/',
          image: '/svg/logo-nextjs.svg',
        },
        {
          name: 'NestJS',
          link: 'https://nestjs.com/',
          image: '/svg/logo-nestjs.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Redis',
          link: 'https://redis.io/',
          image: '/svg/logo-redis.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'GitLab CI/CD',
          link: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
          image: '/svg/logo-gitlab.svg',
        },
      ],
      role: 'Fullstack Developer',
      type: 'Company',
      images: '/images/example.png',
      company: 'PT Nutech Integrasi',
    },
  },
  {
    id: 'kimiafarma-mobile-1',
    title: 'Kimia Farma Mobile',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Explore App',
    Icon: Forklift,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Mobile App',
      duration: 'January 2025 - August 2025',
      tech: [
        {
          name: 'Java',
          link: 'https://www.java.com/',
          image: '/svg/logo-java.svg',
        },
        {
          name: 'Spring Boot',
          link: 'https://spring.io/projects/spring-boot',
          image: '/svg/logo-spring.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Redis',
          link: 'https://redis.io/',
          image: '/svg/logo-redis.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'Kubernetes',
          link: 'https://kubernetes.io/',
          image: '/svg/logo-kubernetes.svg',
        },
        {
          name: 'Argo CD',
          link: 'https://argo-cd.readthedocs.io/en/stable/',
          image: '/svg/logo-argocd.svg',
        },
        {
          name: 'GitLab CI/CD',
          link: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
          image: '/svg/logo-gitlab.svg',
        },
      ],
      role: 'Backend Developer',
      type: 'Company',
      images: '/images/example.png',
      company: 'PT Harmonix Teknologi Peentar',
    },
  },
  {
    id: 'academic-information-system-1',
    title: 'Academic Information System',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: GraduationCap,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'January 2025 - August 2025',
      tech: [
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: '/svg/logo-typescript.svg',
        },
        {
          name: 'Java',
          link: 'https://www.java.com/',
          image: '/svg/logo-java.svg',
        },
        {
          name: 'Next.js',
          link: 'https://nextjs.org/',
          image: '/svg/logo-nextjs.svg',
        },
        {
          name: 'Spring Boot',
          link: 'https://spring.io/projects/spring-boot',
          image: '/svg/logo-spring.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Redis',
          link: 'https://redis.io/',
          image: '/svg/logo-redis.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'Kubernetes',
          link: 'https://kubernetes.io/',
          image: '/svg/logo-kubernetes.svg',
        },
        {
          name: 'Argo CD',
          link: 'https://argo-cd.readthedocs.io/en/stable/',
          image: '/svg/logo-argocd.svg',
        },
        {
          name: 'GitLab CI/CD',
          link: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
          image: '/svg/logo-gitlab.svg',
        },
      ],
      role: 'Fullstack Developer',
      type: 'Company',
      images: '/images/example.png',
      company: 'PT Harmonix Teknologi Peentar',
    },
  },
  {
    id: 'super-app-polri',
    title: 'Super App POLRI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Explore App',
    Icon: Smartphone,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Mobile App',
      duration: 'July 2025 - Present',
      tech: [
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: '/svg/logo-typescript.svg',
        },
        {
          name: 'Golang',
          link: 'https://golang.org/',
          image: '/svg/logo-golang.svg',
        },
        {
          name: 'React JS',
          link: 'https://reactjs.org/',
          image: '/svg/logo-react.svg',
        },
        {
          name: 'Gin Framework',
          link: 'https://gin-gonic.com/',
          image: '/svg/logo-gin.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Redis',
          link: 'https://redis.io/',
          image: '/svg/logo-redis.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'Github CI/CD',
          link: 'https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions',
          image: '/svg/logo-github.svg',
        },
      ],
      role: 'Fullstack Web Developer',
      type: 'Freelance',
      images: '/images/example.png',
    },
  },
  {
    id: 'sistem-pengajuan-tik-polri',
    title: 'Sistem Pengajuan TIK POLRI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente suscipit deserunt reiciendis tempora facilis, assumenda harum labore dolorum odio perferendis molestias voluptas, animi culpa delectus praesentium dignissimos ipsum veritatis?',
    href: 'https://meingehirn.ninja/',
    cta: 'Visit Website',
    Icon: Smartphone,
    background: (
      <div className="absolute inset-0 bg-cyan-950/40 blur-2xl animate-pulse" />
    ),
    details: {
      platform: 'Web App',
      duration: 'August 2025 - Present',
      tech: [
        {
          name: 'JavaScript',
          link: 'https://www.javascript.com/',
          image: '/svg/logo-javascript.svg',
        },
        {
          name: 'PHP',
          link: 'https://www.php.net/',
          image: '/svg/logo-php.svg',
        },
        {
          name: 'React JS',
          link: 'https://reactjs.org/',
          image: '/svg/logo-react.svg',
        },
        {
          name: 'Laravel',
          link: 'https://laravel.com/',
          image: '/svg/logo-laravel.svg',
        },
        {
          name: 'Inertia.js',
          link: 'https://inertiajs.com/',
          image: '/svg/logo-inertia.svg',
        },
        {
          name: 'Ant Design',
          link: 'https://ant.design/',
          image: '/svg/logo-antdesign.svg',
        },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          image: '/svg/logo-postgresql.svg',
        },
        {
          name: 'Redis',
          link: 'https://redis.io/',
          image: '/svg/logo-redis.svg',
        },
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: '/svg/logo-docker.svg',
        },
        {
          name: 'Github CI/CD',
          link: 'https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions',
          image: '/svg/logo-github.svg',
        },
      ],
      role: 'Fullstack Web Developer',
      type: 'Freelance',
      images: '/images/example.png',
    },
  },
]
