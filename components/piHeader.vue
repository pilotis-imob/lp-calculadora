<template>
    <header class="header">
        <div class="center" size="wide">
            <nav class="main-nav">
                <nuxt-link to="/"><img src="/images/logo.svg" alt="Pilotis Imóveis" class="logo"></nuxt-link>
                <div class="main-nav__nav">
                    <ul class="main-nav__menu">
                        <li class="main-nav__item">
                            <nuxt-link to="/" class="main-nav__link">Imóveis</nuxt-link>
                        </li>
                        <li class="main-nav__item">
                            <nuxt-link to="https://teste.com/inteligencia" class="main-nav__link">Inteligência Imobiliária</nuxt-link>
                        </li>
                    </ul>
                    <botaoAnuncie />
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .main-nav {
        display: flex;
        align-items: center;
        gap: 80px;
        padding-top: 48px;
        padding-bottom: 20px;
    }

        .main-nav__nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-grow: 1;
        }

        .main-nav__menu {
            display: flex;
            flex-flow: row nowrap;
            gap: 36px;
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
        }
</style>