import React from 'react'
import { store } from './ViewStore'
import { InfoTable } from './components/InfoTable'
import { Filter } from './components/Filter/Filter'

const App = () => {
  return (
    <div className="container app" >
      <Filter store={store} />
      <InfoTable store={store} />
    </div>
  )
}

export default App
