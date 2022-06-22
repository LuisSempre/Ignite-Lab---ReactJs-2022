import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
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
    <div className="flex items-center justify-center min-h-screen text-white">
     <Event />
    </div>
  )
}

export default App
