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