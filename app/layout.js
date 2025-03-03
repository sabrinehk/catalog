import Head from "next/head";
import Providers from "@/tools/Providers";

import "./globals.css";

export default function Layout({ children, metadata }) {
  const pageMetadata = {...metadata};
  return (
    <html lang="en" dir="rtl" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sabrineh.ir" />
        <link rel="canonical" href="https://sabrineh.ir" />
        <title>{pageMetadata.title}</title>
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
