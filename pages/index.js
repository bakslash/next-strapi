
import styles from '../styles/Home.module.css'
import client from '../apollo_client'
import Articles from "../components/articles";
import Layout from "../components/layout";
import { GET_ARTICLES } from '../queries'

export default function Home(articles,categories) {

  console.log('login article',articles);


  return (
    <Layout categories={articles.categories}>
     
      <div className={styles.container}>
      <Articles articles={articles.articles}/>



      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({query:GET_ARTICLES})

  return {
    props: {
      articles: data.articles.data,
      authors: data.authors.data,
      categories: data.categories.data
    }
  }
}

