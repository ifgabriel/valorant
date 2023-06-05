import Image from 'next/image'
import name from '../assets/name.svg'

const Banner = () => (
  <div className="relative">
    <video preload="true" autoPlay muted loop className="max-h[460px]">
      <source
        src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute bottom-0 left-0 right-0 top-0 mx-28 flex flex-col items-center justify-center gap-10 border-r border-white/10">
      <span>Um jogo de tiro tático 5x5 com personagens originais</span>
      <Image src={name} alt="Valorant" />
    </div>
  </div>
)

export default Banner
