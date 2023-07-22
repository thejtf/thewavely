import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  '阅读外刊是提高英语水平，获取丰富多样性信息的重要途径。外刊文章语言地道流畅，不仅可以增强英语阅读和写作能力，还可以提高我们的英语思维和应考能力。浪潮外刊收录涵盖全球政治、经济、文化等多个领域权威杂志期刊，可加深对世界更多的了解，开拓我们的国际视野。'
export const metadata = {
  title: '最新外刊',
  description,
  openGraph: {
    title: '最新外刊',
    description,
  },
  twitter: {
    title: '最新外刊',
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
          欢迎进入外刊世界
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
