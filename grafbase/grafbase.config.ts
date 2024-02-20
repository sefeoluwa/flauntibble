// @ts-ignore
import { config, connector, g, auth } from '@grafbase/sdk'

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
  projects: g.string(),
}).auth((rules) => {
  rules.public().read()
})

  const Projects = mongodb.model('Projects', {
    title: g.string().length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteurl: g.url(),
    githubUrl: g.url(),
    category: g.string(),
    createdBy: g.string(),
  }).auth((rules) => {
    rules.public().read(),
    rules.private().create().delete().update();
  })

  .collection('users')


  const jwt = auth.JWT({
    issuer: 'grafbase',
    secret: g.env('NEXTAUTH_SECRET')
  })

  export default config({
    schema: g,
    auth: {
      providers: [jwt],
      rules: (rules) => rules.private(),
    }
  })
