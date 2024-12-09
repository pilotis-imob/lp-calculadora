<template>
    <section class="investimento">
      <div class="mosaico" v-if="props.mosaico">
        <div class="mosaico__item mosaico__item--1"></div>
        <div class="mosaico__item mosaico__item--2"></div>
        <div class="mosaico__item mosaico__item--3"></div>
      </div>
      <div class="center investimento__content" size="wide">
          <div class="investimento__info">
            <p class="brow">Alugue seu imóvel com a Pilotis</p>
            <h2>Seu investimento em boas mãos</h2>
            <p class="subtitle investimento__text">Nossa equipe de especialistas possui um conhecimento profundo das tendências locais e das condições do mercado, proporcionando uma avaliação precisa e competitiva. Oferecemos um serviço completo de análise do seu imóvel, com foco nas condições do mercado de Brasília, para determinar o valor ideal do aluguel. Somos especialistas em administração, locação e vendas de imóveis em Brasília.</p>
          </div>
          <div class="investimento__cta">
            <div class="investimento__pic-1"></div>
            <div class="investimento__pic-2"></div>
            <botaoAnuncie />
            <img src="/images/logo.svg" alt="Pilotis Imóveis" class="investimento__logo"> 
          </div>
      </div>
    </section>
</template>

<script setup>
  const props = defineProps({
    mosaico: {
        type: Boolean,
        default: true,
    }
  });
</script>

<style lang="scss" scoped>
  .investimento {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      top: 0;
      right: 0;
      bottom: 30px;
      background: var(--secondary-color);
      border-radius: 0 0 0 393px;
      z-index: 0;
      @media (max-width: 1105px) {
        display: none;
      }
    }
   }

    .mosaico {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      position: relative;
      z-index: 1;
    }

    .mosaico__item {
      height: 412px;
      background-size: cover;
      background-position: center;
      @media (max-width: 1105px) {
        height: 110px;
      }
    }

      .mosaico__item--1 {
        background-image: url('/images/quarto.webp');
      } 

      .mosaico__item--2 {
        background-image: url('/images/sala.webp');
      } 

      .mosaico__item--3 {
        background-image: url('/images/cozinha.webp');
      } 


    .investimento__content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding-block: 97px;
      position: relative;
      z-index: 1;
      @media (max-width: 1105px) {
        flex-flow: column nowrap;
        padding-block: 45px;
      }
    }

    .investimento__info {
      width: calc(50% - 25px);
      display: flex;
      flex-flow: column nowrap;
      gap: 16px;
      h2 {
        color: var(--primary-color);
      }
      @media (max-width: 1105px) {
        width: 100%;
        text-align: center;
      }
    }

    .investimento__text {
      color: hsla(0, 0%, 21%, 1);
    }

    .investimento__cta {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-end;
      gap: 36px;
      position: relative;
      a {
        position: relative;
        z-index: 2;
      }
      @media (max-width: 1105px) {
        padding-top: 160px;
      }
    }

    .investimento__logo {
      height: 82px;
      @media (max-width: 1105px) {
        height: 44px;
      }
    }

    .investimento__pic-1 {
      position: absolute;
      height: 206px;
      width: 132px;
      background-image: url('/images/abajur.webp');
      background-position: center;
      background-size: cover;;
      bottom: 35%;
      right: calc(50% + 5px);
      border-radius: 200px;
      z-index: 1;
      @media (max-width: 1105px) {
        height: 124px;
        width: 79px;
      }
    }

    .investimento__pic-2 {
      position: absolute;
      height: 276px;
      width: 177px;
      background-image: url('/images/sala-jantar.webp');
      background-position: center;
      background-size: cover;;
      bottom: 35%;
      left: calc(50% + 5px);
      border-radius: 200px;
      z-index: 1;
      @media (max-width: 1105px) {
        height: 166px;
        width: 107px;
      }
    }
</style>