import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = '精读营'
const description =
  '浪潮外刊 TheWavely 一直致力于用轻松有效的方式提升英语能力，我们坚持“学以致用”的理念，用正确的方法帮助大家在工作、考试中提升英语能力。我们努力让英语学习不再枯燥，而是在乐趣中感受语言的魅力。'

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
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Reading Club / 精读营
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>精读营介绍</h2>
        <p>我们提供以下相关服务：</p>
        <ul>
          <li>
            <b>营内内容</b>
            ：文章精选顶级杂志、原文解析、考纲必备词汇、长难句解析、翻译训练等。
          </li>
          <li>
            <b>入营安排</b>
            ：周一至周五提供近期精读PDF，支持下载保存，手机和电脑都可学习。
          </li>
          <li>
            <b>适合人群</b>
            ：考研、雅思、GRE备考的相关同学、已工作人士、高校在校师生等。
          </li>
          <li>
            <b>教学团队</b>
            ：由来自北大、哈工大等国内国际名校的编辑组成，有丰富外刊阅读经验。
          </li>
          <li>
            <b>入营优势</b>
            ：文章新鲜、注释深入、翻译地道流畅、版式精美、持续优化完善精进。
          </li>
        </ul>
        <p>
          不仅如此，加入 Reading Club 还可以结识很多志同道合的良师益友，共同进步！
        </p>

        <h2>精读营定价</h2>
        <p>加入 Reading Club 的价格为：</p>
        <ul>
          <li>
            <strong>¥129 - 三个月</strong>
          </li>
          <li>
            <strong>¥199 - 半年期</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">小助理二维码</span>
          </span>
        </p>
        <p>
          添加时请注明来意为{' '}
          <RichLink
            href="https://thewavely.com/ama"
            target="_blank"
          >
            加入精读营
          </RichLink>
          。然后，根据小助理提示完成支付验证后，即可入营。
        </p>

        <h2>社区评论</h2>
        <p>
          下面两个截图摘选来自社交媒体同学
          的分享，精读外刊不仅提高应试能力、发现学语言的思维、还能提高人的视野。
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p>
      </article>
    </Container>
  )
}