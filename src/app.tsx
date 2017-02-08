import * as React from 'react'
import {render} from 'react-dom'

const Hello = ({ compiler, framework }: { compiler: string, framework: string }) => {
  return (
    <div>
      <div>{compiler}</div>
      <div>{framework}</div>
    </div>
  )
}

render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root')
)