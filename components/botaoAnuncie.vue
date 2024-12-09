<template>
    <nuxt-link to="https://api.whatsapp.com/send/?phone=556135757418&text=Ol%C3%A1%21&type=phone_number&app_absent=0" target="_blank" class="button button--base" :class="{'button--xl':size=='xl'}">Anuncie seu imóvel <span class="material-symbols-outlined">arrow_outward</span></nuxt-link>
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