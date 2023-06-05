const Overview = () => (
  <section
    className="
      bg-tertiary-50
      pb-64
      pt-12
      before:absolute before:left-60 before:top-4 before:h-full before:w-8 before:bg-[url('https://playvalorant.com/assets/images/background-sprite.png')] before:bg-no-repeat
      after:absolute after:left-72 after:top-0 after:h-full after:border-l after:border-l-neutral-400"
  >
    <div className="container relative mx-auto">
      <div className="border-t border-t-neutral-400">
        <h2 className="mt-7 max-w-lg font-heading text-[140px] leading-[0.93] text-secondary-50">
          NÓS SOMOS VALORANT
        </h2>
        <div className="mt-20 flex justify-between">
          <div className="ml-28 max-w-xs">
            <h3 className="font-sans text-2xl text-secondary-50">
              DESAFIE SEUS LIMITES
            </h3>
            <p className="mt-5 max-w-sm font-sans text-base text-gray-50">
              Misture o seu estilo e experiência em um cenário global e
              competitivo. Você terá 13 rodadas para atacar e defender com
              disparos certeiros e habilidades táticas. Com apenas uma vida por
              rodada, você deve pensar mais rápido que o oponente se quiser
              sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque,
              além da Disputa da Spike e do Mata-Mata!
            </p>
          </div>
          <div
            className="
              max-h-2xl absolute right-20 flex max-w-2xl
              before:absolute before:-top-9 before:left-12 before:h-2 before:w-2 before:bg-primary-50
              after:absolute after:-top-9 after:left-0 after:h-2 after:w-2 after:bg-primary-50
              "
          >
            <span className="absolute -left-6 top-4 z-20 bg-primary-50 px-6 py-0.5 ">
              Jogo
            </span>
            <video preload="true" autoPlay muted loop className="max-h[460px]">
              <source
                src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
                type="video/mp4"
              />
            </video>
            <span className="absolute -bottom-1.5 left-0 h-1.5 w-32 bg-primary-50"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Overview
