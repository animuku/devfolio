module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: ``,
    // Your Name
    name: 'Anirudh Mukundan Raghavan',
    // Main Site Title
    title: `Anirudh Mukundan Raghavan | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/animuku`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/anirudhmukundanraghavan`,
    // Content of the About Me section
    about: `I am an aspiring Software Engineer, with a passion for Machine Learning and Web Development.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Landmark Recognition using Squeeze and Excitation Networks',
        description:
          'A Deep Learning project to recognize landmarks from images, using Squeeze and Excitation networks.',
        link: '',
      },
      {
        name: 'News Aggregator',
        description:
          'A web application which aggregates news articles from multiple sources and places them in one convenient location',
        link: '',
      },
      {
        name: 'Distributed Systems Algorithms',
        description:
          'Implemented consistent hashing, peer-to-peer communication algorithms(Gossip and Push-Sum) and a Distrbuted Hash Table using the Tapestry overlay network.',
        link: '',
      },
      {
        name: 'Distributed Twitter Engine',
        description:
          'A distributed engine for a twitter-like application, built with Phoenix and Elixir ',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'University of Florida(I-Heal Lab)',
        description: 'Graduate Research Assistant(Machine Learning Research + Software Engineering), February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java,Python,JavaScript,TensorFlow,PyTorch,Node.js, Express.js,React.js',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostgreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Linux',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
