import { useState } from "react"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <strong>{count}?</strong>
      <button onClick={() => setCount(count => count+1)}>add</button>
    </div>
  )
}