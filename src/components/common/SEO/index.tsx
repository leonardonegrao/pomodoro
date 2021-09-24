import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  bannerImgUrl?: string;
}

export default function SEO({
  title,
  description,
  // bannerImgUrl = '',
}: SEOProps) {

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={baseUrl} /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={bannerImgUrl} /> */}

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content={baseUrl} /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* <meta property="twitter:image" content={bannerImgUrl} /> */}
    </Head>
  );
}
