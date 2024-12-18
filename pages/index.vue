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
              <div class="steps__number">
                <div class="steps__icon" v-if="i >= data.step">{{ i }}</div>
                <div class="steps__icon" v-else><span class="material-symbols-outlined">check</span></div>
                <div class="steps__text">{{ step }}</div>
              </div>
              <span class="material-symbols-outlined steps__chevron" v-if="i < steps.length-1">chevron_right</span>
            </div>
          </div>
          <div class="steps__fields">
            <div class="steps__field steps__field--select" :class="{'steps__field--error': list.error && !data[list.variable]}" v-for="(list, index) in  data.selects" v-bind:key="list.variable">
              <button class="steps__select-trigger" :class="{'steps__select-trigger--opened': list.show}" @click="list.show = !list.show" v-if="index == data.step">
                <span class="material-symbols-outlined">{{ list.icon }}</span>
                {{ data[list.variable]?findValue(list):list.label }}
                <span class="material-symbols-outlined chevron">keyboard_arrow_down</span>
              </button>
              <div class="steps__field-list" v-if="index == data.step && list.show">
                <span class="material-symbols-outlined chevron">keyboard_arrow_down</span>
                <button class="steps__field-item" v-for="option in list.options" v-bind:key="option.value" @click="data[list.variable] = option.value; list.show = false">{{ option.label }}</button>
              </div>
            </div>
            <div class="steps__field" :class="{'steps__field--error': data.metragemError && !data.metragem}" v-if="data.step == 4">
              <input type="number" class="steps__input" v-model="data.metragem" placeholder="Área privativa M2"/>
              <span class="material-symbols-outlined steps__input-icon">square_foot</span>
            </div>
          </div>
          <nuxt-link class="button button--base button--lg" @click="proximoPasso()" v-if="data.step<=3">Próximo</nuxt-link>
          <nuxt-link class="button button--base button--lg" @click="calcular" v-if="data.step==4">Calcular</nuxt-link>
        </div>
      </div>
      <comoCalculamos />
    </section>
    <investimentoSection />
  </section>
</template>

<script setup>
const router = useRouter()

const data = reactive({
  tipo: '',
  bairro: '',
  suites: 0,
  vagas: 0,
  metragem: 0,
  metragemError: false,
  valor: 0,
  valorFinal: 0,
  step: 0,
  quartos: 0,
  selects: [
  {
    variable: 'bairro',
    icon: 'location_on',
    label: 'Bairro',
    show: false,
    error: false,
    options: [
      {
        "value": "ASA SUL",
        "label": "Asa sul"
      },
      {
        "value": "ASA NORTE",
        "label": "Asa norte"
      },
      {
        "value": "SUDOESTE",
        "label": "Sudoeste"
      },
      {
        "value": "NOROESTE",
        "label": "Noroeste"
      },
      {
        "value": "OCTOGONAL",
        "label": "Octogonal"
      },
      {
        "value": "AGUAS CLARAS",
        "label": "Águas claras"
      },
      {
        "value": "GUARA",
        "label": "Guará"
      },
      {
        "value": "CRUZEIRO",
        "label": "Cruzeiro"
      }
    ]
  },
  {
    variable: 'quartos',
    icon: 'bed',
    label: 'Quantidade de quartos',
    show: false,
    error: false,
    options: [
      {
        value: '0',
        label: '0 quartos'
      },
      {
        value: '1',
        label: '1 quartos'
      },
      {
        value: '2',
        label: '2 quartos'
      },
      {
        value: '3',
        label: '3+ quartos'
      },
    ]
  },
  {
    variable: 'suites',
    icon: 'shower',
    label: 'Quantidade de suítes',
    show: false,
    error: false,
    options: [
      {
        value: '0',
        label: '0 suítes'
      },
      {
        value: '1',
        label: '1 suítes'
      },
      {
        value: '2',
        label: '2 suítes'
      },
      {
        value: '3',
        label: '3+ suítes'
      },
    ]
  },
  {
    variable: 'vagas',
    icon: 'directions_car',
    label: 'Quantidade de vagas',
    show: false,
    error: false,
    options: [
      {
        value: '0',
        label: '0 vagas'
      },
      {
        value: '1',
        label: '1 vagas'
      },
      {
        value: '2',
        label: '2 vagas'
      },
      {
        value: '3',
        label: '3+ vagas'
      }
    ]
  },
]
});

const steps = [
  'Bairro',
  'Quartos',
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

const findValue = (list) => {
  const selectedOption = list.options.find(option => option.value === data[list.variable])
  return selectedOption ? selectedOption.label : list.label
}

const calcular = () => {
  if(data.metragem){
    const bairro = bairros.find(b => b.bairro === data.bairro);
    const modifier = data.metragem >= 51 ? bairro.maior : bairro.menor;
    data.valor = data.metragem * modifier;
    data.valorFinal = data.valor;
    if(data.suites > 0) {
      const percent = percentuais.find(b => b.numero == data.suites);
      data.valorFinal += (data.valor * percent.valor)
    }
    if(data.vagas > 0) {
      const percent = percentuais.find(b => b.numero == data.vagas);
      data.valorFinal += (data.valor * percent.valor)
    }
    router.push('/calculo?valor='+data.valorFinal.toFixed(0)+buildParameters())
  } else {
    data.metragemError = true;
  }
}

const buildParameters = () => {
  let parameters = '';
  const bairro = data.selects[0].options.find(option => option.value === data.bairro); 
  parameters += `&bairro=${bairro.label}`;
  parameters += `&quartos=${data.quartos}`;
  parameters += `&suites=${data.suites}`;
  parameters += `&vagas=${data.vagas}`;
  parameters += `&area=${data.metragem}`;
  return parameters
}

const proximoPasso = () => {
  const active = data.selects[data.step];
  const verify = (data[active.variable]);
  if(verify) {
    data.step++
  } else {
    data.selects[data.step].error = true;
  }
}
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
    @media (max-width: 1105px) {
      padding-top: 0;
      h2, p {
        text-align: center;
      }
      &::before {
          width: 140%;
      }
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
    @media (max-width: 1105px) {
      display: none;
    }
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
    @media (max-width: 1105px) {
      display: none;
    }
   }


  .calculadora {
    width: 50%;
    padding: 26px 10px 26px 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 30px;
    z-index: 10;
    position: relative;
    @media (max-width: 1105px) {
      width: 100%;
    }
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

    .steps__number {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 7px;
      @media (max-width: 1105px) {
        flex-flow: column nowrap;
      }
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

    .steps__fields {
      width: 100%;
    }

    .steps__field {
      width: 100%;
      position: relative;
      transition: all 0.2s ease-in-out;
      .chevron {
        position: absolute;
        top: 24px;
        right: 40px;
        color: hsla(224, 13%, 39%, 1);
      }
    }

      .steps__field--error {
        box-shadow: 0px 0px 16px var(--primary-color);
      }

    .steps__select-trigger {
      padding: 24px 40px;
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;
      align-items: center;
      width: 100%;
      border: none;
      background-color: white;
      color: hsla(0, 0%, 21%, 1);
      font-weight: 700;
      position: relative;
      cursor: pointer;
      span {
        color: hsla(220, 49%, 49%, 1);
      }
    }

    .steps__field-list {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      .chevron {
        transform: rotateX(180deg);
      }
      button {
        padding: 24px 40px;
        display: flex;
        flex-flow: row nowrap;
        gap: 20px;
        align-items: center;
        width: 100%;
        border: none;
        background-color: white;
        color: hsla(0, 0%, 21%, 1);
        font-weight: 700;
        cursor: pointer;
        transition: all 0.1s ease-out;
        &:hover {
          background-color: hsla(220, 49%, 49%, 0.1);
        }
      }
    }

    .steps__input {
      padding: 24px 40px 24px 76px;
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;
      align-items: center;
      width: 100%;
      border: none;
      background-color: white;
      color: hsla(0, 0%, 21%, 1);
      font-weight: 700;
      position: relative;
    }

    .steps__input-icon {
      position: absolute;
      top: 18px;
      left: 40px;
      color: hsla(220, 49%, 49%, 1);
    }
</style>
