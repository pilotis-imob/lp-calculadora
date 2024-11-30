<template>
    <div class="como-calculamos">
        <div class="center como-calculamos__content" size="wide">
            <div class="como-calculamos__info">
            <h2>Como calculamos o valor do aluguel?</h2>
            <p class="subtitle">Nossa calculadora considera características dos imóveis de Brasília e baseado nas centenas de imóveis que alugamos com o valor mais próximo do ideal possível, tanto para o proprietário quanto para o futuro inquilino.</p>
            </div>
            <img src="/images/casa.svg" alt="Ilustração casa" class="como-calculamos__img">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .como-calculamos {
    position: relative;
    z-index: 1;
    padding-block: 80px;
    background-color: var(--primary-color);
    * {color: white;}
  }

    .como-calculamos__content {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 160px;
    }

    .como-calculamos__info {
      width: 50%;
      display: flex;
      flex-flow: column nowrap;
      gap: 24px;
    }

    .como-calculamos__img {
      width: 212px;
    }
</style>