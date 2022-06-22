import { gql, useQuery } from "@apollo/client"
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
const {} = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ul>
        {data.lessons.map(lesson => {
          return <li>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
