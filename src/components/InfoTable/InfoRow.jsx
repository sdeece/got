import React, { useState } from 'react'
import classNames from 'classnames'
import { ArrayInLine } from '../../common/ArrayInLine'
import { bemClass } from '../../common/BemClassName'

const rootClass = bemClass('info-row')
const getProperty = (property) => property || <span className="spec-property">not know</span>

const InfoRow = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false)

  if (!item.name) return null

  return (
    <div className={rootClass()}>
      <div className={rootClass('line')}>
        {item.name}
        <span className={classNames('icon', { 'icon--expanded': isExpanded })} onClick={() => setExpanded(!isExpanded)}></span>
      </div>
      {isExpanded && (
        <div className={rootClass('description')}>
          <div>
            <span className="label">Aliases:</span>
            <ArrayInLine items={item.aliases} />
          </div>
          <div>
            <span className="label">Born:</span>
            <span>{getProperty(item.born)}</span>
          </div>
          <div>
            <span className="label">Culture:</span>
            <span>{getProperty(item.culture)}</span>
          </div>
          <div>
            <span className="label">Died:</span>
            <span>{getProperty(item.died)}</span>
          </div>
          <div>
            <span className="label">Father:</span>
            <span>{getProperty(item.father)}</span>
          </div>
          <div>
            <span className="label">Gender:</span>
            <span>{getProperty(item.gender)}</span>
          </div>
          <div>
            <span className="label">Mother:</span>
            <span>{getProperty(item.mother)}</span>
          </div>
          <div>
            <span className="label">Name:</span>
            <span>{item.name}</span>
          </div>
          <div>
            <span className="label">Titles:</span>
            <ArrayInLine items={item.titles} />
          </div>
        </div>
      )}
    </div>
  )
}

export {
  InfoRow,
}
