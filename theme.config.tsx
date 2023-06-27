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

        <title>{`${title} | Nadia's Knowledge Base`}</title>
        <meta
          name="description"
          content="Annisa Nadia's personal knowledge base"
        />
      </>
    );
  },
};

export default config;
