import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Router } from "../Router"
import { client } from '../lib/apollo'
import { BrowserRouter } from "react-router-dom"
const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string
}
function App() {
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSIONS_QUERY,
  //   }).then(response => {
  //   console.log(response.data)  
  // })
  // }, [])
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY)

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
