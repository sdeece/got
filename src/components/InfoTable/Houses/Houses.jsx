import React from 'react'
import { ArrayInLine } from '../../../common/ArrayInLine'
import { GetProperty } from '../../../common/GetProperty'

const Houses = ({ item }) => {
  return (
    <>
      <div>
        <span className="label">Ancestral Weapons:</span>
        <ArrayInLine items={item.ancestralWeapons} />
      </div>
      <div>
        <span className="label">Cadet Branches:</span>
        <ArrayInLine items={item.cadetBranches} />
      </div>
      <div>
        <span className="label">Coat Of Arms:</span>
        <GetProperty property={item.coatOfArms} />
      </div>
      <div>
        <span className="label">Current Lord:</span>
        <GetProperty property={item.currentLord} />
      </div>
      <div>
        <span className="label">Died Out:</span>
        <GetProperty property={item.diedOut} />
      </div>
      <div>
        <span className="label">Founded:</span>
        <GetProperty property={item.founded} />
      </div>
      <div>
        <span className="label">Founder:</span>
        <GetProperty property={item.founder} />
      </div>
      <div>
        <span className="label">Heir:</span>
        <GetProperty property={item.heir} />
      </div>
      <div>
        <span className="label">Overlord:</span>
        <GetProperty property={item.overlord} />
      </div>
      <div>
        <span className="label">Name:</span>
        <GetProperty property={item.name} />
      </div>
      <div>
        <span className="label">Region:</span>
        <GetProperty property={item.region} />
      </div>
      <div>
        <span className="label">Seats:</span>
        <ArrayInLine items={item.seats} />
      </div>
      <div>
        <span className="label">Sworn Members:</span>
        <ArrayInLine items={item.swornMembers} />
      </div>
      <div>
        <span className="label">Titles:</span>
        <ArrayInLine items={item.titles} />
      </div>
      <div>
        <span className="label">Words:</span>
        <GetProperty property={item.words} />
      </div>
    </>
  )
}

export {
  Houses,
}
