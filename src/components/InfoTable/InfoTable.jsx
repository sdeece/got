import React from 'react'
import { observer } from 'mobx-react'
import { InfoRow } from './InfoRow'

const InfoTable = observer(({ store }) => {
  const { currentFilter, data, isLoading, isFailure } = store
  return (
    <div className="info-table">
      {isLoading && <span>loading</span>}
      {isFailure && <span>failure</span>}
      {data.map((item, idx) => (
        <InfoRow key={idx} item={item} currentFilter={currentFilter} />
      ))}
    </div>
  )
})

export {
  InfoTable,
}
