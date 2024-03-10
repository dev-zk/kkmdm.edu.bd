import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import "rsuite/dist/rsuite-no-reset.min.css";
import metaData from "@/config/metaData";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const serverData = {

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* init-project? */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={siteConfig.banglaName} />
        <meta name="keywords" content="kkmdm,  " />
        <meta name="author" content="Kashir Khamar Mofizia Dakhil Madrash" />

        {/* Search Engine Optimization Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="language" content="English" />
        <meta name="generator" content="Next.js" />
        <meta name="copyright" content="Copyright © 2024, Kashir Khamar Mofizia Dakhil Madrash" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* Open Graph / Facebook Meta Tags  */}
        <meta property="og:type" content={metaData.ogType} />
        <meta property="og:title" content={metaData.ogTitle} />
        <meta property="og:description" content={metaData.ogDescription} />
        <meta property="og:url" content={metaData.ogUrl} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:site_name" content={metaData.ogSiteName} />
        <meta property="og:locale" content={metaData.ogLocale} />

        {/* 
	Twitter Meta Tags  */}
        <meta property="twitter:card" content={metaData.twitterCard} />
        <meta property="twitter:title" content={metaData.twitterTitle} />
        <meta
          property="twitter:description"
          content={metaData.twitterDescription}
        />
        <meta
          property="twitter:image"
          content={metaData.twitterImage}
        />
        <meta property="twitter:site" content={metaData.twitterSite} />
        <meta property="twitter:creator" content={metaData.twitterCreator} />

        {/* Schema.org for Google */}
{/* <script type="application/ld+json">
            {JSON.stringify({
              "@context": metaData.schemaContext,
              "@type": metaData.schemaType,
              "name": metaData.schemaName,
              "url": metaData.schemaUrl,
              "logo": metaData.schemaLogo,
              "sameAs": metaData.schemaSameAs,
            })}
          </script> */}

        {/* Favicon  */}
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon" />
      </head>

      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="Kazi Byte Org"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary"> Kazi Byte</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
