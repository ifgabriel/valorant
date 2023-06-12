import Image, { StaticImageData } from 'next/image'
import new0 from '../assets/new-0.jpg'
import new1 from '../assets/new-1.jpg'
import new2 from '../assets/new-2.jpg'

type New = {
  date: string
  title: string
  category: string
  image: StaticImageData
}

const news: New[] = [
  {
    image: new0,
    date: '01/06/23',
    category: 'ATUALIZAÇÕES DO JOGO',
    title: 'TORNEIOS DE COMUNIDADE - 02/06 A 08/06',
  },
  {
    image: new1,
    date: '30/05/23',
    category: 'ANÚNCIOS',
    title: 'ATUALIZAÇÃO DA AVALIAÇÃO DE VOZ NO VALORANT',
  },
  {
    image: new2,
    date: '25/05/23',
    category: 'DEV',
    title: 'O QUE VEM POR AÍ EM 2023 // DIÁRIOS DEV – VALORANT',
  },
]

const News = () => (
  <section className="relative overflow-hidden bg-tertiary-50 after:absolute after:left-[19rem] after:top-0 after:h-full after:border-l after:border-l-neutral-400">
    <h2
      className="text-stroke absolute left-44 top-0 font-heading text-[32rem] leading-[0.7] text-tertiary-50"
      aria-hidden
    >
      WE ARE
    </h2>
    <h2
      className="text-stroke absolute left-[40rem] mt-52 font-heading text-[32rem] leading-[0.93] text-tertiary-50"
      aria-hidden
    >
      VALORANT
    </h2>
    <div className="flex flex-auto">
      <div className="container z-20 mx-auto px-36 pb-24 pt-9">
        <h2 className="relative z-50 pt-7 font-heading text-9xl leading-[0.93] text-primary-50">
          ÚLTIMAS NOTÍCIAS
        </h2>
        <ul className="-mt-5 grid grid-cols-3 gap-12">
          {news.map((item) => (
            <li key={item.title} className="flex flex-col gap-2">
              <Image
                width={390}
                height={219}
                src={item.image}
                alt={item.title}
              />
              <div>
                <span className="relative mr-5 font-sans text-xs text-secondary-50 before:absolute before:-right-[10px] before:top-1/2 before:h-px before:w-px before:bg-secondary-50">
                  {item.date}
                </span>
                <span className="mr-5 font-sans text-xs text-primary-50">
                  {item.category}
                </span>
              </div>
              <h3 className="mr-5 font-sans text-2xl text-secondary-50">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default News
