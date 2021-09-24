import Head from 'next/head';

interface SEOProps {
  title?: string;
  description: string;
  bannerImgUrl?: string;
}

export default function SEO({
  title = '',
  description,
  // eslint-disable-next-line max-len
  bannerImgUrl = 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wi7nij2cfvvqoxlemy1g.jpg',
}: SEOProps) {
  const fullTitle = title ? `${title} | Pomodoro` : 'Pomodoro app';
  const baseUrl = 'https://pomodoro-leonardonegrao.vercel.app/';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta name="url" property="og:url" content={baseUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta name="image" property="og:image" content={bannerImgUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bannerImgUrl} />
    </Head>
  );
}
