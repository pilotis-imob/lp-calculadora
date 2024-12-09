<template>
    <header class="header">
        <div class="center" size="wide">
            <nav class="main-nav">
                <button class="main-nav__trigger" @click="data.menu = true">
                    <span class="material-symbols-outlined">menu</span>
                </button>    
                <nuxt-link to="/"><img src="/images/logo.svg" alt="Pilotis Imóveis" class="logo"></nuxt-link>
                <div class="main-nav__nav" :class="{'main-nav__nav--active': data.menu}">
                    <div class="main-nav__mobile-title">
                        <img src="/images/logo.svg" alt="Pilotis Imóveis" class="logo">
                        <button class="main-nav__close" @click="data.menu = false">
                            <span class="material-symbols-outlined">close</span>
                        </button>    
                    </div>
                    <ul class="main-nav__menu">
                        <li class="main-nav__item">
                            <nuxt-link to="https://pilotis.com.br/imoveis?interesse=aluguel" target="_blank" class="main-nav__link">Imóveis</nuxt-link>
                        </li>
                        <li class="main-nav__item">
                            <nuxt-link to="https://pilotis.com.br/inteligencia-imobiliaria" target="_blank" class="main-nav__link">Inteligência Imobiliária</nuxt-link>
                        </li>
                    </ul>
                    <botaoAnuncie />
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>

const data = reactive({
  menu: false,
});

</script>

<style lang="scss" scoped>
    .main-nav {
        display: flex;
        align-items: center;
        gap: 80px;
        padding-top: 48px;
        padding-bottom: 20px;
        @media (max-width: 1105px) {
            padding-top: 26px;
            padding-bottom: 36px;
            justify-content: center;
        }
    }

        .main-nav__trigger {
            display: none;
            @media (max-width: 1105px) {
                display: block;
                position: absolute;
                color: var(--base-color);
                border: none;
                background: none;
                padding: 0;
                left: 34px;
                span {
                    font-size: 2.5em;
                }
            }
        }

        .main-nav__close {
            display: block;
            color: var(--base-color);
            border: none;
            background: none;
            padding: 0;
            span {
                font-size: 2em;
            }
        }

        .main-nav__nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-grow: 1;
            @media (max-width: 1105px) {
                position: fixed;
                top: -300px;
                left: 0;
                right: 0;
                background: #FFF;
                padding: 24px;
                flex-flow: column nowrap;
                z-index: 99;
                gap: 24px;
                align-items: initial;
                transition: all 0.3s ease-out;
            }
        }

        .main-nav__nav--active {
            @media (max-width: 1105px) {
                top: 0;
            }
        }

        .main-nav__menu {
            display: flex;
            flex-flow: row nowrap;
            gap: 36px;
            @media (max-width: 1105px) {
                flex-flow: column nowrap;
                gap: 24px;
            }
        }

        .main-nav__item {
            list-style: none;
        }

        .main-nav__link {
            font-weight: 500;
            text-decoration: none;
            padding: 20px 12px 40px;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2.5px;
                transition: 0.1s ease-out;
            }
            &.router-link-active::before,
            &:hover:before {
                background-color: var(--primary-color);
            }
            @media (max-width: 1105px) {
                display: block;
                padding: 0 0 16px 0;
            }
        }

        .main-nav__mobile-title {
            display: none;
            @media (max-width: 1105px) {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: space-between;
            }
            .logo {
                width: auto;
                height: 28px;
            }
        }
</style>