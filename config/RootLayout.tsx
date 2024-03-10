
  // // metaData.ts
  // import keywords from './AllKey';
  
  // export type MetaDataType = {
  //     description: string;
  //     keywords: string[];
  //     author: string;
  //     generator: string;
  //     copyright: string;
  //     referrer: string;
  //     ogType: string;
  //     ogTitle: string;
  //     ogDescription: string;
  //     ogUrl: string;
  //     ogImage: string;
  //     ogSiteName: string;
  //     ogLocale: string;
  //     twitterCard: string;
  //     twitterTitle: string;
  //     twitterDescription: string;
  //     twitterImage: string;
  //     twitterSite: string;
  //     twitterCreator: string;
  //     schemaType: string;
  //     schemaName: string;
  //     schemaUrl: string;
  //     schemaLogo: string;
  //     schemaSameAs: string[];
  //     favicon: string;
  // };
  
  // const metaData: MetaDataType = {
  //     description: "",
  //     keywords: keywords,
  //     author: "Zobaidul Kazi",
  //     generator: "zobaidul kazi",
  //     copyright: "Kashir Khamar Mofizia Dakhil Madrash",
  //     referrer: "kazibyte",
  //     ogType: "website",
  //     ogTitle: "Kashir Khamar Mofizia Dakhil Madrash",
  //     ogDescription: "School Management System - Your comprehensive solution for managing school operations efficiently.",
  //     ogUrl: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
  //     ogImage: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
  //     ogSiteName: "Kashir Khamar Mofizia Dakhil Madrash",
  //     ogLocale: "en_US",
  //     twitterCard: "summary_large_image",
  //     twitterTitle: "Kashir Khamar Mofizia Dakhil Madrash",
  //     twitterDescription: "School Management System - Your comprehensive solution for managing school operations efficiently.",
  //     twitterImage: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
  //     twitterSite: "@zobaidulkazi",
  //     twitterCreator: "@zobaidulkazi",
  //     schemaType: "Organization",
  //     schemaName: "School Management System",
  //     schemaUrl: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
  //     schemaLogo: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
  //     schemaSameAs: [],
  //     favicon: "/public/favicon.ico",
  // };
  
  // export default metaData as Readonly<MetaDataType>;
  
  // // RootLayout.tsx
  // import { Metadata } from "next";
  // import { siteConfig } from "@/config/site";
  // import metaData from "@/config/metaData";
  
  // const metadata: Metadata = {
  //   title: {
  //     default: siteConfig.name,
  //     template: `%s - ${siteConfig.name}`,
  //   },
  //   description: siteConfig.description,
  //   themeColor: [
  //     { media: "(prefers-color-scheme: light)", color: "white" },
  //     { media: "(prefers-color-scheme: dark)", color: "black" },
  //   ],
  //   icons: {
  //     icon: "/favicon.ico",
  //     shortcut: "/favicon-16x16.png",
  //     apple: "/apple-touch-icon.png",
  //   },
  // };
  
  // export default function RootLayout({ children }: { children: React.ReactNode }) {
  //   return (
  //     <>
  //       <html lang="en" suppressHydrationWarning>
  //         <head>
  //           <meta charSet="UTF-8" />
  //           <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  //           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //           <meta name="description" content={siteConfig.banglaName} />
  //           <meta name="keywords" content={metaData.keywords.join(',')} />
  //           <meta name="author" content={metaData.author} />
  //           <meta name="robots" content="index, follow" />
  //           <meta name="revisit-after" content="7 days" />
  //           <meta name="distribution" content="global" />
  //           <meta name="rating" content="general" />
  //           <meta name="language" content="English" />
  //           <meta name="generator" content="Next.js" />
  //           <meta name="copyright" content={metaData.copyright} />
  //           <meta name="referrer" content="origin-when-cross-origin" />
  //           <meta property="og:type" content={metaData.ogType} />
  //           <meta property="og:title" content={metaData.ogTitle} />
  //           <meta property="og:description" content={metaData.ogDescription} />
  //           <meta property="og:url" content={metaData.ogUrl} />
  //           <meta property="og:image" content={metaData.ogImage} />
  //           <meta property="og:site_name" content={metaData.ogSiteName} />
  //           <meta property="og:locale" content={metaData.ogLocale} />
  //           <meta property="twitter:card" content={metaData.twitterCard} />
  //           <meta property="twitter:title" content={metaData.twitterTitle} />
  //           <meta property="twitter:description" content={metaData.twitterDescription} />
  //           <meta property="twitter:image" content={metaData.twitterImage} />
  //           <meta property="twitter:site" content={metaData.twitterSite} />
  //           <meta property="twitter:creator" content={metaData.twitterCreator} />
  //           <script type="application/ld+json">
  //             {JSON.stringify({
  //               "@context": metaData.schemaContext,
  //               "@type": metaData.schemaType,
  //               "name": metaData.schemaName,
  //               "url": metaData.schemaUrl,
  //               "logo": metaData.schemaLogo,
  //               "sameAs": metaData.schemaSameAs,
  //             })}
  //           </script>
  //           <link rel="icon" href={metaData.favicon} type="image/x-icon" />
  //           <link rel="shortcut icon" href={metaData.favicon} type="image/x-icon" />
  //         </head>
  //         <body>
  //           {children}
  //         </body>
  //       </html>
  //     </>
  //   );
  // }
  