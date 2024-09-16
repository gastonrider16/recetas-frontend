export function Recipe({name, description, image, ingredients}) {
  return (
    <div className={`relative flex flex-col cursor-pointer min-w-[260px] w-[330px] min-h-[130px] p-3 py-4 rounded-md bg-gradient-to-r from-primaryT from-[10%] to-transparent hover:shadow-lg shadow-black hover:scale-105 ease-in duration-100 overflow-hidden`}>
      <div className="z-10">
        <h4 className="font-primaryT capitalize text-md font-bold text-white leading-6 drop-shadow-md shadow-[blue]">{name}</h4>
        <p className="font-primaryT italic font-semibold text-xs text-gray-600">
          {description}
        </p>
        <div className="flex gap-1 font-primaryT text-xs text-gray-100">
          <span className="font-black capitalize">Ingredientes:</span>
          <p className="font-bold text-gray-100">
            {
              ingredients.map(i => (
                i.nombre + "-"
              ))
            }
          </p>
        </div>
      </div>
      <div className="z-0 justify-end absolute top-0 left-0 flex w-full h-full overflow-hidden">
        <img src={image} alt={name} className="w-52 h-full object-cover rounded-full translate-x-14" />
      </div>
    </div>
  )
}