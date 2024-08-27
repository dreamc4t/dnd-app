export default function UserPage() {
  return (
    <main className='flex flex-col h-full'>
      <h1 className='mb-4'>TEST PAGE HELLO</h1>
      <div className='flex-grow flex overflow-hidden'>
        <div className='flex-1 overflow-y-auto bg-gray-200 p-4'>
          <h2>100 Items</h2>
          {[...Array(100)].map((_, i) => (
            <p key={i}>Item #{i + 1}</p>
          ))}
        </div>
        <div className='flex-1 overflow-y-auto bg-gray-300 p-4'>
          <h2>50 Items</h2>
          {[...Array(50)].map((_, i) => (
            <p key={i}>Item #{i + 1}</p>
          ))}
        </div>
        <div className='flex-1 overflow-y-auto bg-gray-400 p-4'>
          <h2>10 Items</h2>
          {[...Array(10)].map((_, i) => (
            <p key={i}>Item #{i + 1}</p>
          ))}
        </div>
      </div>
    </main>
  )
}
