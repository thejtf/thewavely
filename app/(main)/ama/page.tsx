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
        <h2>精读营介绍</h2>
        <p>我们提供以下相关服务：</p>
        <ul>
          <li>
            <b>课程内容</b>
            ：文章精选顶级杂志、原文解析、考纲必备词汇、长难句解析、翻译训练等。
          </li>
          <li>
            <b>课程安排</b>
            ：周一至周五提供近期精读PDF，支持下载保存，手机和电脑都可学习。
          </li>
          <li>
            <b>创业经验</b>
            ：我是
            <RichLink href="https://zolplay.com" target="_blank">
              佐玩
            </RichLink>
            的创始人，现在带领着团队帮助游戏开发者打造协同平台。
          </li>
          <li>
            <b>英语技能</b>：英语能力不足，想提高自己的英语水平？想跟 Cali
            一样可以{' '}
            <RichLink
              href="https://y.qq.com/n/ryqq/songDetail/003c0O9B3firAU"
              favicon={false}
              target="_blank"
            >
              英文说唱
            </RichLink>
            ？
          </li>
          <li>
            <b>其他</b>
            ：我的美国留学与工作经验，内容创作，音乐制作经验等等都可以帮助你解答一些其他的问题。
          </li>
        </ul>
        <p>
          你也可以全程跟我用英语聊，我也非常乐意，因为可能我的英语比中文说的要好。。。
        </p>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，通过{' '}
          <RichLink
            href="https://cal.com/calicastle/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p>

        <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
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