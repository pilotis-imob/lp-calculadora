<template>
    <footer class="footer">
        <div class="center" size="wide">
            <div class="footer__head">
                <img src="/images/logo-negativa.svg" alt="Pilotis Imóveis" class="logo">
                <ul class="footer__socials">
                    <li class="footer__social-item">
                        <a href="https://api.whatsapp.com/send/?phone=556135753412&text=Ol%C3%A1%21&type=phone_number&app_absent=0" class="footer__social-link"><img src="/images/whatsapp.png" alt="Whatsapp"></a>
                    </li>
                    <li class="footer__social-item">
                        <a href="https://www.instagram.com/pilotisimoveis/" class="footer__social-link footer__social-link--padding"><img src="/images/instagram.png" alt="Instagram"></a>
                    </li>
                </ul>
            </div>
            <nav class="footer__nav">
                <nuxt-link to="https://pilotis.com.br/lancamentos" target="_blank" class="footer__link">Lançamentos</nuxt-link>
                <nuxt-link to="https://api.whatsapp.com/send/?phone=556135753412&text=Ol%C3%A1%21&type=phone_number&app_absent=0" target="_blank" class="footer__link">Aluguéis</nuxt-link>
                <nuxt-link to="https://api.whatsapp.com/send/?phone=556135753412&text=Ol%C3%A1%21&type=phone_number&app_absent=0" target="_blank" class="footer__link">Fale Conosco</nuxt-link>
                <nuxt-link to="/" class="footer__link">Calculadora Pilotis</nuxt-link>
            </nav>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .footer {
        padding-block: 70px 120px;
        background-color: var(--base-color);
        * {
            color: white;
        }
        @media (max-width: 1105px) {
            padding-block: 47px;
        }
        .center {
            @media (max-width: 1105px) {
                display: flex;
                justify-content: space-between
            }
        }
    }

        .footer__head {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 70px;
            @media (max-width: 1105px) {
                flex-flow: column nowrap;
                align-items: flex-start;
                padding-bottom: 0;
            }
        } 

        .logo {
            height: 95px;
            width: auto;
            @media (max-width: 1105px) {
                height: 67px;
            }
        } 

        .footer__socials {
            display: flex;
            flex-flow: now nowrap;
            align-items: center;
            gap: 6px;
        }

        .footer__social-item {
            list-style: none;
        }

            .footer__social-link--padding {
                padding-inline: 12px;
                img {
                    height: 24px;
                    width: auto;
                }
            }

        .footer__nav {
            display: grid;
            grid-template-columns: 160px 160px;
            gap: 34px 12px;
            @media (max-width: 1105px) {
                grid-template-columns: 1fr;
            }
        }

        .footer__link {
            text-decoration: none;
        }
</style>