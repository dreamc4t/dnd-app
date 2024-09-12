import React from 'react'

const LoadingSpinnerOverlay = () => {
  return (
    <div className='absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-white'></div>
    </div>
  )
}

export { LoadingSpinnerOverlay }
