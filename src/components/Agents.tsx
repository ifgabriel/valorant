import Image from 'next/image'
import razeImage from '../assets/raze.png'
import reynaImage from '../assets/reyna.png'

const Agents = () => (
  <section className="section-background relative bg-primary-50 pb-32 pt-12">
    <div className="diagonal h-14 w-80" />
    <div className="container relative mx-auto flex justify-end before:h-4 before:w-full before:bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2cAAAAaBAMAAADBMTnUAAAALVBMVEUAAAAPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMEvDlEAAAAD3RSTlMAkT8wGAhgOycjEoN7VB+N+usOAAAAdklEQVRo3u3UwQmBcRyH8W8pvQcpcpMbvTmj5CQTKBMYwQo2sAKjWcQMvwP91eezwlNPAADg5wZ9arr+nMaclql5rlNzX6Ulo3mxwXByTGNu09Q8Fqm5ztIS0f4wWrdPzXjT3B5fh9Rctql57wIAAAAAAAB81we4bAq3ImcPlQAAAABJRU5ErkJggg==')] ">
      <div className="absolute -top-24 left-0 z-10 w-[550px]" aria-hidden>
        <Image src={reynaImage} alt="Agente Reyna" />
        <Image
          className="absolute left-80 top-32 -scale-x-100"
          src={razeImage}
          alt="Agente Raze"
        />
      </div>
      <div className="-mr-16 mb-32 mt-16 max-w-[490px] border-t border-t-tertiary-50 py-6">
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
