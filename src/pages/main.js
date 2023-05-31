
import * as React from "react"
import { useStaticQuery,graphql } from "gatsby";





const Main = () => {
    const data = useStaticQuery(graphql`
query  allContentfulJamBlog {
    nodes {
      title
      published
      article {
        raw
      }
    }
  }
`);

console.log('DATA', data)
    return (
    <>HALLO WORLD</>
    )
}

export default Main;
