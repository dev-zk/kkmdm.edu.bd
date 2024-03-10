// metaDataType.ts
import AllKey from "./AllKey";



export type MetaDataType = {
    // init-project?
    description: string;
    keywords: object;
    author: string;
  
    // Search Engine Optimization Meta Tags
    generator: string;
    copyright: string;
    referrer: string;
  
    // Open Graph / Facebook Meta Tags
    ogType: string;
    ogTitle: string;
    ogDescription: string;
    ogUrl: string;
    ogImage: string;
    ogSiteName: string;
    ogLocale: string;
  
    // Twitter Meta Tags
    twitterCard: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterSite: string;
    twitterCreator: string;
  
    // Schema.org for Google
    schemaContext: string;
    schemaType: string;
    schemaName: string;
    schemaUrl: string;
    schemaLogo: string;
    schemaSameAs: string[];
  
    // Favicon
    favicon: string;
  };
  

  const metaData: MetaDataType = {
    // init-project?
    description: "",
    keywords: {AllKey},
    author: "Zobaidul Kazi",
  
    // Search Engine Optimization Meta Tags
    generator: "zobaidul kazi",
    copyright: "Kashir Khamar Mofizia Dakhil Madrash",
    referrer: "kazibyte",
  
    // Open Graph / Facebook Meta Tags
    ogType: "website",
    ogTitle: "Kashir Khamar Mofizia Dakhil Madrash",
    ogDescription: "School Management System - Your comprehensive solution for managing school operations efficiently.",
    ogUrl: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
    ogImage: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
    ogSiteName: "Kashir Khamar Mofizia Dakhil Madrash",
    ogLocale: "en_US",
  
    // Twitter Meta Tags
    twitterCard: "summary_large_image",
    twitterTitle: "Kashir Khamar Mofizia Dakhil Madrash",
    twitterDescription: "School Management System - Your comprehensive solution for managing school operations efficiently.",
    twitterImage: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
    twitterSite: "@zobaidulkazi",
    twitterCreator: "@zobaidulkazi",
  
    // Schema.org for Google
    schemaContext: "",
    schemaType: "Organization",
    schemaName: "School Management System",
    schemaUrl: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
    schemaLogo: "https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true",
    schemaSameAs: [
      
    ],
  
    // Favicon
    favicon: "/public/favicon.ico",
  };
  
  // Freeze the metaData object to make it immutable
  Object.freeze(metaData);
  
  // Export the globally accessible metaData object
  export default metaData as Readonly<MetaDataType>;
  