import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '收录媒体'
const description =
  '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          目前收录的外刊
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          我们收录的标准是<b>中立</b>的、还有就是<b>客观</b>的或者是有利于<b>备考</b>的国际权威杂志期刊。
          下面是我们筛选出来的部分期刊列表，所选文章大多来自以下期刊更新，能更好的反应当代英语语言特点。总之，坚持阅读外刊，可以提升英语综合能力，获取丰富全面信息，对个人发展大有裨益。 
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
