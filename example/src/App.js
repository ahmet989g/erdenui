import React from 'react'

import { Button } from 'erdenui'
import 'erdenui/dist/index.css'


const App = () => {
  return (
    <div>
    <Button type='primary' text="Click Me" onClick = {() => window.location.href ="https://github.com/ahmet989g"} /> <br />
    <Button type='danger' text="Click Me" onClick = {() => window.location.href ="https://github.com/ahmet989g"} /> <br />
    <Button type='dashed' text="Click Me" onClick = {() => window.location.href ="https://github.com/ahmet989g"} /> <br />
    <Button type='warning' text="Click Me" onClick = {() => window.location.href ="https://github.com/ahmet989g"} /> <br />
    <Button type='default' text="Click Me" onClick = {() => window.location.href ="https://github.com/ahmet989g"} /> <br />

    </div>
  )
}

export default App
