import { useEffect } from "react"
import { client } from '../lib/apollo'

const GET_LESSIONS_QUERY = `
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
useEffect(() => {
  client.query()
}, [])
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1>HI</h1>
    </div>
  )
}

export default App
