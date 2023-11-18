export default function NewsLetter() {
  return (
    <div className="mx-auto p-5 bg-[#F1F2EC]">
      <p className="w-4/5 mx-auto text-xl sm:text-3xl md:text-7xl lg:text-8xl text-gray-800 font-semibold">
        Recibe ofertas exclusivas en tu correo electrónico
      </p>
      <p className="w-4/5 mx-auto text-sm">
        Suscríbete a nuestro Boletin informativo y mantente actualizado
      </p>
      <div className="mt-2 w-4/5 mx-auto h-[30px] md:h-[70px] pl-5">
        <input
          type="email"
          placeholder="Su identificación de correo electrónico"
          className="w-3/5 h-full rounded-l-lg pl-3"
        />
        <button className="h-full text-xl rounded-r-lg bg-red-500 text-white">
          Suscribirse
        </button>
      </div>
    </div>
  );
}
