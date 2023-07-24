import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = '精读营'
const description =
  '浪潮外刊TheWavely一直致力于用轻松有效的方式提升英语能力，我们坚持“学以致用”的理念，用正确的方法帮助大家在工作、考试中提升英语能力。我们努力让英语学习不再枯燥，而是在乐趣中感受语言的魅力。'

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
        <h2>课程介绍</h2>
        <h3>01-课程主要解决哪些问题？</h3>
        <p>本课程主要解决以下问题：</p>
        <ul>
          <li>
            <b>不知如何坚持？</b>：我们提供轻松有效的阅读SOP。
          </li>
          <li>
            <b>记单词效率低？</b>：我们通过科学遗忘曲线帮你优化记忆方式。
          </li>
          <li>
            <b>难理解文章大意？</b>：我们通过简述总结帮你理解背景信息。
          </li>
          <li>
            <b>语法基础较弱？</b>：长难句逻辑分析提高理解文章句意能力。
          </li>
          <li>
            <b>写作无思路？</b>：通过长期阅读积累语感和奠定写作基础。
          </li>
        </ul>
        <p>
          我们团队全程跟踪训练营同学，追踪大家的学习进度，提高优化学习路径。
        </p>
        

        <h2>定价</h2>
        <p>我们目前加入训练营的价格为：</p>
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
            <span className="mt-1 text-sm font-medium">小助手二维码</span>
          </span>
        </p>
        <p>
          清扫描上方二维码加助理编辑的微信，并注明来意。一旦你按照操作完成支付，即可入营。
        </p>

        <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名训练营入营同学的评价，能够帮助到更多的人提高英语能力一直是我们的使命：
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
