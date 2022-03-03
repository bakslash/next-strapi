import { GET_ARTICLES } from '../../queries'
import client from '../../apollo_client'
export default function Home(articles) {

    console.log(articles);
    return (
        <div>
         <p>test art</p>
        </div>
    )
  }

  export async function getStaticPaths() {
    const { data } = await client.query({query:GET_ARTICLES})
    const articles =data.articles.data
    const paths = articles.map((article) => ({
      params: { slug: article.attributes.slug },
    }))
    return {paths,fallback: true };
  }

  export async function getStaticProps({ params}) {
    const { data } = await client.query({query:GET_ARTICLES})
  console.log("try params",params);
    return {
      props: {
        article: params.slug
      },
      revalidate: 1,
    }
  }
  