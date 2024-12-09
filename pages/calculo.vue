<template>
  <section>
    <section class="valores">
      <div class="center valores__content" size="wide">
        <div class="valor">
          <p class="valor__text">Valor sugerido</p>
          <p class="valor__number">{{ `R$ ${valor}` }}</p>
        </div>
        <div class="sugestoes">
          <p class="sugestoes__text">Outras sugestões</p>
          <div class="sugestoes__valores">
            <div class="valor valor--small">
              <p class="valor__text">Mais rápido</p>
              <p class="valor__number">{{ `R$ ${valorRapido}` }}</p>
            </div>
            <div class="sugestoes__spacer"></div>
            <div class="valor valor--small">
              <p class="valor__text">Valor máximo</p>
              <p class="valor__number">{{ `R$ ${valorMaximo}` }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="align-center">
        <botao-anuncie size="xl"></botao-anuncie>
      </div>
    </section>
    <section>
      <comoCalculamos />
    </section>
    <investimento-section :mosaico="false">
    </investimento-section>
  </section>
</template>

<script setup>
const route = useRoute()
let valor = 0;
if(route.query && route.query.valor) {
  valor = Number(route.query.valor).toLocaleString('pt-BR');
} 
const valorNumerico = Number(valor.replace(/\./g, '').replace(',', '.'));
const valorRapido = (valorNumerico * 0.9).toLocaleString('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
const valorMaximo = (valorNumerico * 1.1).toLocaleString('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

</script>

<style scoped lang="scss">
  .valores {
    padding-block: 86px 110px;
    @media (max-width: 1105px) {
      padding-block: 46px;
    }
  }

    .valores__content {
      padding: 64px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      @media (max-width: 1105px) {
        flex-flow: column nowrap;
        padding: 24px;
        gap: 20px;
      }
    }

  .valor {
    display: flex;
    flex-flow: column nowrap;
    gap: 14px;
  }

    .valor__text {
      font-size: 1.875em;
      font-weight: 700;
      color: hsla(0, 0%, 21%, 1);
      @media (max-width: 1105px) {
        font-size: 1.25em;
      }
    }

    .valor__number {
      font-size: 5em;
      font-weight: 700;
      color: hsla(22, 100%, 50%, 1);
      @media (max-width: 1105px) {
        font-size: 3.375em;
      }
    }

  .valor--small {
    gap: 5px;
    .valor__text {
      font-size: 1.125em;
      font-weight: 400;
      @media (max-width: 1105px) {
        font-size: 0.75em;
      }
    }
    .valor__number {
      font-size: 2.5em;
      @media (max-width: 1105px) {
        font-size: 1.75em;
      }
    }
  }

  .sugestoes {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      @media (max-width: 1105px) {
        gap: 12px;
      }
  }

    .sugestoes__text {
      font-size: 1.25em;
      font-weight: 700;
    }

    .sugestoes__valores {
      display: flex;
      flex-flow: row nowrap;
      gap: 40px;
      @media (max-width: 1105px) {
        gap: 30px;
      }
    }

    .sugestoes__spacer {
      width: 1px;
      height: 100%;
      background-color: hsla(220, 49%, 49%, 1);
    }
</style>
