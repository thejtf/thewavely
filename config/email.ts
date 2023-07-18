export const emailConfig = {
  from: 'hi@thewavely.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://thewavely.com`
      : 'http://localhost:3000',
}
