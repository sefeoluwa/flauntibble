// import { g, config, auth } from '@grafbase/sdk'


// const User = g.model('User', {
//   name: g.string().length({ min: 2, max: 20 }),
//   email: g.string().unique(),
//   avatarUrl: g.url(),
//   description: g.string().optional(),
//   githubUrl: g.url().optional(),
//   linkedInUrl: g.url().optional(),
//   projects: g.relation(() => Projects).list().optional(),
// })

// const Projects = g.model('Project', {
//   title: g.string().length({ min: 3 }),
//   description: g.string(),
//   image: g.url(),
//   liveSiteurl: g.url(),
//   githubUrl: g.url(),
//   category: g.string().search(),
//   createdBy: g.relation(() => User)
// })

// export default config({
//   schema: g
  
// })


import { config, connector, g } from '@grafbase/sdk'

const mongodb = connector.MongoDB('MongoDB', {
  url: g.env('MONGO_ATLAS_URL'),
  apiKey: g.env('MONGO_API_KEY'),
  dataSource: g.env('MONGO_DATASOURCE'),
  database: g.env('MONGO_DATABASE')
})

g.datasource(mongodb)
const User = mongodb.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
})

  const Projects = mongodb.model('Projects', {
    title: g.string().length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteurl: g.url(),
    githubUrl: g.url(),
    category: g.string(),
    createdBy: g.string(),
  })

  .collection('users')

  export default config({
    schema: g,
  })
