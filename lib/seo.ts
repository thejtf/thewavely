export const seo = {
  title: '浪潮外刊 - The Wavely',
  description:
    '浪潮外刊 The Wavely 一站式双语外刊备考解决方案。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://thewavely.com'
      : 'http://localhost:3000'
  ),
} as const
