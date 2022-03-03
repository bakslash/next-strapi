import React from "react"
import Link from "next/link"
//import NextImage from "./image"

const Card = ({ article }) => {
    console.log('single art', article);
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            {/* <NextImage image={article.image} /> */}
          </div>
          <div className="uk-card-body">
            <h4 id="category" className="uk-text-uppercase">
              {article.attributes.title}
            </h4>
            <p id="title" className="uk-text-large">
              {article.attributes.description}
            </p>
            <p id="title" className="uk-text-large">
            created : <br></br>
              {article.attributes.createdAt}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card