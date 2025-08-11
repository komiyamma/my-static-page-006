import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <h1>Vite + React + TypeScript</h1>
      <p>プロジェクトが正常に初期化されました。</p>
      <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>
    </div>
  )
}
