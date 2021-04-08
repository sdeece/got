import React from 'react'

const ArrayInLine = ({ items }) => {
  if (!items.length) return <span className="spec-property">not know</span>

  return (
    <>
      {items.map((item, idx) => (
        <span key={idx}>
          {item}
          {idx < items.length ? ',' : '.'}
        </span>
      ))}
    </>
  )
}

export {
  ArrayInLine,
}
