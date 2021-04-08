import React from 'react'
import { GetProperty } from '../../../common/GetProperty'

const Books = ({ item }) => {
  return (
    <>
      <div>
        <span className="label">Author:</span>
        <GetProperty property={item.author} />
      </div>
      <div>
        <span className="label">Country:</span>
        <GetProperty property={item.country} />
      </div>
      <div>
        <span className="label">Name:</span>
        <GetProperty property={item.name} />
      </div>
      <div>
        <span className="label">NumberOfPages:</span>
        <GetProperty property={item.numberOfPages} />
      </div>
      <div>
        <span className="label">Publisher:</span>
        <GetProperty property={item.publisher} />
      </div>
      <div>
        <span className="label">Url:</span>
        <GetProperty property={item.url} />
      </div>
    </>
  )
}

export {
  Books,
}
