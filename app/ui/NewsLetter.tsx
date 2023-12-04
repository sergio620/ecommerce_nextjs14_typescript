export default function NewsLetter() {
  return (
    <div className="mx-auto p-5 bg-[#CDF5FD]">
      <p className="w-4/5 mx-auto text-xl sm:text-3xl md:text-7xl lg:text-8xl text-gray-800 font-semibold">
        Recibe ofertas exclusivas en tu correo electrónico
      </p>
      <p className="w-4/5 mx-auto text-sm">
        Suscríbete a nuestro Boletin informativo y mantente actualizado
      </p>
      <div className="mt-2 w-4/5 sm:h-[30px] mx-auto md:h-[70px] ">
        <input
          type="email"
          placeholder="Su correo electrónico"
          className="sm:w-3/5 h-full pl-3"
        />
        <button className="px-3 h-full text-xl bg-red-500 text-white">
          Suscribirse
        </button>
      </div>
    </div>
  );
}
