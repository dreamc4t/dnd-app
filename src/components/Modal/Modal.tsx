import { ReactNode, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-2/3 rounded-lg bg-white p-6 shadow-lg'>
        <button
          className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export { Modal }
