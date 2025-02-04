import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  '阅读外刊是提高英语水平，获取丰富多样性信息的重要途径。外刊文章语言地道流畅，不仅可以增强英语阅读和写作能力，还可以提高我们的英语思维和应考能力。浪潮外刊收录涵盖全球经济、社会、文化等多个领域权威杂志期刊，下面是本刊的近期公告。'
export const metadata = {
  title: '本刊公告',
  description,
  openGraph: {
    title: '本刊公告',
    description,
  },
  twitter: {
    title: '本刊公告',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          欢迎进入本刊公告
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
