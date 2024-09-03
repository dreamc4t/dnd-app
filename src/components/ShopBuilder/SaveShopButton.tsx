import { saveShopString } from '@/constants/strings'

interface SaveShopButtonProps {
  handleSaveShop: () => void
}

export const SaveShopButton = ({ handleSaveShop }: SaveShopButtonProps) => {
  return (
    <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleSaveShop}>
      {saveShopString}
    </button>
  )
}
