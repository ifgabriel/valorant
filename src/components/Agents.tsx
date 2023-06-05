import Image from 'next/image'
import razeImage from '../assets/raze.png'
import reynaImage from '../assets/reyna.png'

const Agents = () => (
  <section
    className="
      relative 
      bg-primary-50
      pb-32
      pt-12
      after:absolute after:left-72 after:top-0 after:h-full after:border-l after:border-l-neutral-400"
  >
    <div className="container relative mx-auto flex justify-end">
      <div className="absolute -left-24 -top-24 z-10" aria-hidden>
        <Image src={reynaImage} alt="Agente Reyna" />
        <Image
          className="absolute left-80 top-32 -scale-x-100"
          src={razeImage}
          alt="Agente Raze"
        />
      </div>
      <div className="my-40 max-w-[490px] border-t border-t-tertiary-50 py-9 pl-6">
        <h2 className="mt-7 font-heading text-[140px] leading-[0.93] text-tertiary-50">
          SEUS AGENTES
        </h2>
        <h3 className="mt-10 font-sans text-2xl text-tertiary-50">
          A CRIATIVIDADE É SUA MELHOR ARMA.
        </h3>
        <p className="mt-5 max-w-sm font-sans text-base text-tertiary-50">
          Mais do que armas e munição, VALORANT inclui agentes com habilidades
          adaptativas, rápidas e letais, que criam oportunidades para você
          exibir sua mecânica de tiro. Cada Agente é único, assim como os
          momentos de destaque de cada partida!
        </p>
      </div>
    </div>
  </section>
)

export default Agents
