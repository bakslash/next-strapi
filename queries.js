import { gql } from '@apollo/client'

export const GET_ARTICLES = gql`
query getArticles{
  articles{
    data{
      attributes{
        title
        description
        slug
        createdAt
      }
    }
  }
  authors{
    data{
       id
        attributes{
          name
          createdAt
                   }
       }
         }
     categories{
          data{
        id
        attributes{
          name
          slug
          description
          createdAt
        }
      }
    }
}
`