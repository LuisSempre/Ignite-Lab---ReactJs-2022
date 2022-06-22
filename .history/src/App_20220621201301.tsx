import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from '../lib/apollo'

const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
useEffect(() => {
  client.query({
    query: GET_LESSIONS_QUERY,
  }).then(response => {
  console.log(response.data)  
})
}, [])
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1>HI</h1>
    </div>
  )
}

export default App
