import React from "react";
import Head from "next/head";

type SeoType = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  siteName?: string;
};
const SEO: React.FC<SeoType> = ({
  title,
  description,
  url,
  image,
  type = "website",
  siteName = "Irwin Plastering",
}) => {
  return (
    <Head>
      <link rel="icon" href="../../public/images/svg/handLogo.svg" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
