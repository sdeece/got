import React, { useState } from 'react'
import classNames from 'classnames'
import { bemClass } from '../../common/BemClassName'
import { filterType } from '../../common/filterType'
import { Characters } from './Characters'
import { Books } from './Books'
import { Houses } from './Houses'

const rootClass = bemClass('info-row')

const InfoRow = ({ item, currentFilter }) => {
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
          {currentFilter === filterType.CHARACTERS && <Characters item={item} />}
          {currentFilter === filterType.BOOKS && <Books item={item} />}
          {currentFilter === filterType.HOUSES && <Houses item={item} />}
        </div>
      )}
    </div>
  )
}

export {
  InfoRow,
}
