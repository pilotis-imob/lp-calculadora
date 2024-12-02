<template>
    <nuxt-link to="https://teste.com" target="_blank" class="button button--base" :class="{'button--xl':size=='xl'}">Anuncie seu imóvel <span class="material-symbols-outlined">arrow_outward</span></nuxt-link>
</template>

<script setup>
  const props = defineProps({
    size: {
        type: String,
        default: '',
    }
  });

</script>

<style lang="scss" scoped>

</style>