export const getUserQuery = `
    query GetUser($email: String!) {
        query MongoDB {
            mongoDB {
              user(by: {email: $email}) {
                email
                id
                name
                avatarUrl
                description
                githubUrl
                linkedInUrl
              }
            }
          }
    }
`

export const createUserMutation = `
    mutation Createuser($input: UserCreateInput!) {
        mongoDB{
            userCreate(input: $input){
                user{
                    name
                    email
                    avatarUrl
                    description
                    githubUrl
                    linkedinUrl
                    id
                }
            }
        }
    }
`