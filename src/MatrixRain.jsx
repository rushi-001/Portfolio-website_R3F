import React from 'react'
import { MatrixColumn } from './MatrixColumn'

export const MatrixRain = ({numColumns, speed}) => {
  return (
    <div className="matrix-container">
      {Array.from({ length: numColumns }, (_, index) => (
        <MatrixColumn key={index} speed={speed} />
      ))}
    </div>
  )
}
