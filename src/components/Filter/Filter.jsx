import React from 'react'
import classNames from 'classnames'
import { menuItems } from './constants'
import { observer } from 'mobx-react'

const Filter = observer(({ store }) => {
  const { currentFilter, setFilter } = store
  return (
    <div className="filter">
      {menuItems.map((item, idx) => (
        <span
          key={idx}
          className={classNames('filter__item', { 'filter__item--active': item === currentFilter })}
          onClick={() => setFilter(item)}
        >
          {item.toUpperCase()}
        </span>
      ))}
    </div>
  )
})

export {
  Filter,
}