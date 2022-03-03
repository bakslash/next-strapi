import { GET_ARTICLES } from '../../queries'
import client from '../../apollo_client'
export default function Home(categories) {

    console.log(categories);
    
    return (
      
        
        <div>
  
         <p>test</p>
  
  
        </div>
      
    )
  }

 

  export async function getStaticPaths() {
    const { data } = await client.query({query:GET_ARTICLES})
    const categories =data.categories.data
    const paths = categories.map((category) => ({
      params: { slug: category.attributes.slug },
    }))
    return {paths,fallback: true };
  }

  export async function getStaticProps({ params}) {
    const { data } = await client.query({query:GET_ARTICLES})
  console.log("try params",params);
    return {
      props: {
        category: params.slug
      },
      revalidate: 1,
    }
  }
  