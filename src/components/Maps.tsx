const Maps = () => (
  <section
    className="
      relative 
      before:absolute before:left-60 before:top-4 before:h-full before:w-8 before:bg-[url('https://playvalorant.com/assets/images/background-sprite.png')] before:bg-no-repeat
      after:absolute after:left-72 after:top-0 after:h-full after:border-l after:border-l-neutral-400"
  >
    <div className="flex flex-auto overflow-y-clip bg-tertiary-50 px-6 pt-10">
      <h2 className="text-stroke absolute left-44 top-14 mt-7 font-heading text-[32rem] leading-[0.93] text-tertiary-50">
        PLACE
      </h2>
      <div className="py-9pt-2 first-letter z-20 my-40 ml-96 max-w-[490px] border-t border-t-neutral-400">
        <h2 className="mt-7 font-heading text-[140px] leading-[0.93] text-secondary-50">
          SEUS MAPAS
        </h2>
        <h3 className="mt-10 font-sans text-2xl text-secondary-50">
          BATALHE AO REDOR DO MUNDO
        </h3>
        <p className="mt-5 max-w-sm font-sans text-base text-gray-50">
          Cada mapa serve como um palco para mostrar sua criatividade. Os mapas
          são feitos sob medida para estratégias de equipe, jogadas
          espetaculares e momentos eletrizantes. Faça as jogadas que todo mundo
          vai tentar imitar no futuro!
        </p>
      </div>
      <div className="absolute bottom-0 right-0 top-0 flex w-full justify-end">
        <img
          src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png"
          alt="Mapa split"
        />
      </div>
    </div>
  </section>
)

export default Maps
