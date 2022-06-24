import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Router } from "react-router-dom"
import { client } from '../lib/apollo'
import { Event } from '../pages/Event'
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
const {data} = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY)

  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
