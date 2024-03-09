export default async function sitemap() {
  return [
    {
      url: `${process.env.APP_PUBLIC_URL}/dashboard/stocks`,
    },
  ];
}
