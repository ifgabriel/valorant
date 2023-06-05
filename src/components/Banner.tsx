import Image from 'next/image'
import name from '../assets/name.svg'

const Banner = () => (
  <div
    className="
      after:left-90
      relative
      after:absolute after:left-72 after:top-0 after:h-full after:border-l after:border-r
      after:border-l-neutral-400 after:border-r-neutral-400 after:px-40
    "
  >
    <video preload="true" autoPlay muted loop className="max-h[460px] w-full">
      <source
        src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center gap-10 border-r border-white/10">
      <span>Um jogo de tiro tático 5x5 com personagens originais</span>
      <Image src={name} alt="Valorant" className="z-10" />
    </div>
  </div>
)

export default Banner
