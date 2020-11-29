/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Destiny'Note`,
    author: `destiny`,
    description: `my own blog`,
    keywords: `react, graphql, gatsby`,
  },
  /* Your site config here */
  plugins: [
    // 引入 sass
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    // 字体排版
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // 处理文件到 graphql
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`, // 文件路径
        name: "src", // 名称，可以用来过滤
        ignore: [], // 可选的，忽略的文件
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`, // 文件路径
        name: "posts", // 名称，可以用来过滤
      },
    },
    // MDX 支持
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        excerpt_separator: `<!-- more -->`, // 设置摘要分隔符
      },
    },
    // PWA 支持
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Destiny'Note`,
    //     short_name: `Destiny`,
    //     start_url: `/`,
    //     background_color: `#6b37bf`,
    //     theme_color: `#6b37bf`,
    //     display: `standalone`,
    //     icon: `src/images/icon.png`,
    //   },
    // },
    // 图片优化
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `./static/assets/`, // 图像存在的位置，我们统一修改为 ./static/assets/ 中
    //     name: `image`,
    //   },
    // },
  ],
};
