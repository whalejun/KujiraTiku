import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Whale-Fall-f44b3145707a481397471ab3a3667fb5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'KujiraTiku',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'KujiraTiku',

  // open graph metadata (optional)
  description: 'WhaleFall',

  // social usernames (optional)
  // twitter: 'KujiraTiku',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  //  mastodon: 'https://fedibird.com/@kujiTake', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // pixiv: '2781527',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'HOME',
      pageId: 'Whale-Fall-f44b3145707a481397471ab3a3667fb5'
    },
     {
      title: 'Profile',
      pageId: '1cecfe00084a4e81a1af2c1c88b74c64'
    },
     {
       title: 'Resume',
       pageId: 'c7f4603c47d64a09a33978dac5aabd2b'
     },
     {
       title: ' Project',
       pageId: '127625c10bbf4cc3871d450d136dbf3f'
     }
   ]
})