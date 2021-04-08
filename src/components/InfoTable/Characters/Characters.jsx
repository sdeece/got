import React from 'react'
import { ArrayInLine } from '../../../common/ArrayInLine'
import { GetProperty } from '../../../common/GetProperty'

const Characters = ({ item }) => {
  return (
    <>
      <div>
        <span className="label">Aliases:</span>
        <ArrayInLine items={item.aliases} />
      </div>
      <div>
        <span className="label">Born:</span>
        <GetProperty property={item.born} />
      </div>
      <div>
        <span className="label">Culture:</span>
        <GetProperty property={item.culture} />
      </div>
      <div>
        <span className="label">Died:</span>
        <GetProperty property={item.died} />
      </div>
      <div>
        <span className="label">Father:</span>
        <GetProperty property={item.father} />
      </div>
      <div>
        <span className="label">Gender:</span>
        <GetProperty property={item.gender} />
      </div>
      <div>
        <span className="label">Mother:</span>
        <GetProperty property={item.mother} />
      </div>
      <div>
        <span className="label">Name:</span>
        <span>{item.name}</span>
      </div>
      <div>
        <span className="label">Titles:</span>
        <ArrayInLine items={item.titles} />
      </div>
    </>
  )
}

export {
  Characters,
}
