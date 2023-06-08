import Image from 'next/image'
import split from '../assets/split.png'

const Maps = () => (
  <section className="section-background relative bg-tertiary-50 pb-52 pt-20 after:border-l-neutral-400">
    <h2 className="text-stroke absolute left-44 top-14 mt-7 font-heading text-[32rem] leading-[0.93] text-tertiary-50">
      PLACE
    </h2>
    <div className="flex flex-auto">
      <div className="first-letter container z-10 mx-auto py-9">
        <h2 className="max-w-[490px] border-t border-t-neutral-400 pt-7 font-heading text-[140px] leading-[0.93] text-secondary-50">
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
        <Image src={split} alt="Mapa split" />
      </div>
    </div>
  </section>
)

export default Maps
