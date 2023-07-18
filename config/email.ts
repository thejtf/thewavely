export const emailConfig = {
  from: 'chizong@gmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://thewavely.com`
      : 'http://localhost:3000',
}
