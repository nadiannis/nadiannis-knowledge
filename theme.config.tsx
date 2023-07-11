import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Nadia's Knowledge Base</span>,
  project: {
    link: 'https://github.com/nadiannis/nadiannis-knowledge',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  docsRepositoryBase:
    'https://github.com/nadiannis/nadiannis-knowledge/blob/main',
  footer: {
    text: (
      <span>
        &copy; 2023{' '}
        <a
          href="https://nadiannis.xyz"
          target="_blank"
          rel="noopener"
          className="nx-text-primary-600 nx-underline"
        >
          Annisa Nadia Neyla
        </a>
      </span>
    ),
  },
  head: () => {
    const { frontMatter, title } = useConfig();

    return (
      <>
        <meta property="og:title" content={title || "Nadia's Knowledge Base"} />
        <meta
          property="og:description"
          content={
            frontMatter.description || "Annisa Nadia's personal knowledge base"
          }
        />
        <meta
          name="description"
          content="Annisa Nadia's personal knowledge base"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#444444" />
        <meta name="theme-color" content="#ffffff"></meta>
        <title>{`${title} | Nadia's Knowledge Base`}</title>
      </>
    );
  },
};

export default config;
