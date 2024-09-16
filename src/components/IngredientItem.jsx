import { TiDelete } from "react-icons/ti"

export function IngredientItem({name, img, onRemoveItem}) {

  return (
    <div className='flex justify-between items-center w-56 h-10 rounded-md bg-primaryT shadow-md overflow-hidden hover:scale-105 ease-in duration-100'>
      <div className='flex h-full items-center gap-3'>
        <div className='flex w-14 h-full overflow-hidden'>
          <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className="font-primaryT capitalize text-md text-white">
          {name}
        </div>
      </div>
      <div className='hover:color-primaryT flex pr-2' title="remover ingrediente" onClick={() => onRemoveItem(name)}>
        <TiDelete className='cursor-pointer text-black hover:text-white hover:scale-125 ease-out duration-200' size={20}/>
      </div>
    </div>
  )
}