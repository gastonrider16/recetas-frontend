export function Navbar() {
  return (
    <nav className="flex justify-center items-center w-screen h-10 p-6 bg-gradient-to-r from-primaryT from-[60%] to-transparent">
      <div className="font-primaryT text-2xl uppercase">
        <span className="font-black text-white drop-shadow-md" onClick={()=>window.location.reload()}>Rece</span>
        <span className="font-black text-transparent bg-gradient-to-r from-white from-[5%] to-black to-[6%] bg-clip-text drop-shadow-md">Tas</span>
      </div>
    </nav>
  )
}