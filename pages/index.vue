<template>
  <section>
    <section class="calculo">
      <div class="center" size="wide">
        <div class="graph"></div>
        <div class="graph-image"></div>
        <div class="calculadora">
          <h2>Descubra quanto cobrar de aluguel em Brasília</h2>
          <p>Use nossa calculadora para descobrir o aluguel do seu imóvel em até 3 minutos</p>
          <div class="calculadora__steps steps">
            <div class="steps__step" :class="{ 'steps__step--active' : i == data.step, 'steps__step--done' : i < data.step }" v-for="(step, i) in steps" v-bind:key="step">
              <div class="steps__icon" v-if="i >= data.step">{{ i }}</div>
              <div class="steps__icon" v-else><span class="material-symbols-outlined">check</span></div>
              <div class="steps__text">{{ step }}</div>
              <span class="material-symbols-outlined steps__chevron" v-if="i < steps.length-1">chevron_right</span>
            </div>
          </div>
          <nuxt-link class="button button--base button--lg" @click="data.step++">Próximo</nuxt-link>
        </div>
      </div>
      <comoCalculamos />
    </section>
    <investimentoSection />
  </section>
</template>

<script setup>
const data = reactive({
  suites: 0,
  vagas: 0,
  metragem: 0,
  valor: 0,
  valorFinal: 0,
  step: 0
});

const steps = [
  'Tipo de imóvel',
  'Bairro',
  'Suítes',
  'Vagas',
  'Área M²'
]

const bairros = [
  {
    "bairro": "ASA SUL",
    "menor51m2": 45,
    "maior": 40
  },
  {
    "bairro": "ASA NORTE",
    "menor51m2": 45,
    "maior": 40
  },
  {
    "bairro": "SUDOESTE",
    "menor51m2": 50,
    "maior": 40
  },
  {
    "bairro": "NOROESTE",
    "menor51m2": 55,
    "maior": 40
  },
  {
    "bairro": "OCTOGONAL",
    "menor51m2": 45,
    "maior": 40
  },
  {
    "bairro": "AGUAS CLARAS",
    "menor51m2": 40,
    "maior": 35
  },
  {
    "bairro": "GUARA",
    "menor51m2": 40,
    "maior": 35
  },
  {
    "bairro": "CRUZEIRO",
    "menor51m2": 40,
    "maior": 35
  }
]

const percentuais = [
  {
    numero: 0,
    valor: 0
  },
  {
    numero: 1,
    valor: 0.1
  },
  {
    numero: 2,
    valor: 0.15
  },
  {
    numero: 3,
    valor: 0.18
  }
] 

</script>

<style scoped lang="scss">
   .calculo {
    padding-top: 80px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 65%;
      top: 0;
      left: 0;
      bottom: 0;
      background: var(--secondary-color);
      border-radius: 0 393px 0 0;
      z-index: 0;
    }
   }

   .graph {
    position: absolute;
    width: 50%;
    top: 70px;
    bottom: 33%;
    right: 0;
    border: 1px solid hsla(160, 33%, 2%, 0.32);
    z-index: 2;
    border-radius: 0 0 0 300px;
   }

   .graph-image {
    position: absolute;
    width: calc(50% - 26px);
    top: 42px;
    bottom: 36%;
    right: 0;
    z-index: 2;
    border-radius: 0 0 0 300px;
    background-image: url('/images/vista.webp');
    background-position: top right;
    background-size: cover;
   }


  .calculadora {
    width: 50%;
    padding: 26px 10px 26px 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 30px;
    z-index: 1;
    position: relative;
  }

  .steps {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 14px;
  }

    .steps__step {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 7px;
    }

    .steps__icon {
      background-color: white;
      border:1px solid hsla(223, 14%, 90%, 1);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      font-size: 0.625em;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      transition: all 0.2s ease-out;
      span {
        font-size: 1.25em;
        transform: translateY(10%);
      }
    }

    .steps__text {
      font-size: 0.75em;
      color: hsla(222, 11%, 36%, 1);
      transition: all 0.2s ease-out;
    }

    .steps__chevron {
      color: hsla(220, 8%, 56%, 1);
      font-size: 1em;
      margin-left: 7px;
    }

    .steps__step--active {
      .steps__icon {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
      }

      .steps__text {
        font-weight: 500;
        color: hsla(222, 33%, 6%, 1);
      }
    }

    .steps__step--done {
      .steps__icon {
        background-color: hsla(158, 56%, 50%, 1);
        border-color: hsla(158, 56%, 50%, 1);
        span {
          color: white;
        }
      }
    }
</style>
