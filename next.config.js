/** @type {import('next').NextConfig} */
const repo = 'ecosynthesisx-portfolio'; // <-- set to your repo name

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  images: {
    domains: ['regenbazaar.com','avatars.githubusercontent.com','pbs.twimg.com','cdn-icons-png.flaticon.com','github.com','fonts.googleapis.com','octant.build','s2.coinmarketcap.com','cdn.prod.website-files.com','giveth.io','metapool.app','docs.arbitrum.foundation'],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig; 