import React from 'react'

const GetProperty = ({ property }) => (
  <>
    {property || <span className="spec-property">not know</span>}
  </>
)

export {
  GetProperty,
}
