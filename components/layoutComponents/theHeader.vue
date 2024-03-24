<script lang="ts">
export default {
    data: () => ({
        store: useAppStore(),
        isMobile: false,
    }),
    methods: {

    },
    mounted(){
        let Refheader: any = this.$refs.Refheader;
        window. addEventListener('scroll', function () {

            if(window.pageYOffset > 1) Refheader.classList.add('scrolled');
            else Refheader.classList.remove('scrolled');

        });

        const screenWidth = window.screen.width
        if(screenWidth <= 1020){
            this.isMobile = true;
        }
    },
    computed:{

    },
}
</script>
<template>
    <menu class="header_container" ref="Refheader">
        <div class="header_container-block" v-if="!isMobile">
            <div class="block__top"
                v-motion
                :initial="{ opacity: 0, y: -10 }"
                :enter="{ opacity: 1, y: 0 }"
                :visible="{ opacity: 1, y: 0 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
            >
                <div class="block__top-left">
                    <button class="button-link" type="button" aria-label="email press@glavapu.mos.ru" title="email press@glavapu.mos.ru">
                        <a href="mailto:press@glavapu.mos.ru" target="_blank" rel="noopener noreferrer">
                            press@glavapu.mos.ru
                        </a>
                    </button>
                    <button class="button-link" type="button" aria-label="map adress" title="map adress">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            1-я Тверская-Ямская улица, 1/3с2
                        </a>
                    </button>
                    <button class="button-link" type="button" aria-label="phone +7 (499) 251-16-17" title="phone +7 (499) 251-16-17">
                        <a href="tel:+74992511617" target="_blank" rel="noopener noreferrer">
                            +7 (499) 251-16-17
                        </a>
                    </button>
                </div>
                <div class="block__top-right">
                    <button class="button-impaired" type="button" aria-label="Version for the visually impaired" title="Версия для слабовидящих">
                        <UnLazyImage
                            src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-glasses.png"
                            blurhash="CMK1%fWBD%M{~qayWBWB"
                            auto-sizes
                            alt="Версия для слабовидящих"
                            class="image"
                        />
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Версия <br>
                            для слабовидящих
                        </a>
                    </button>
                    <div class="info_block">
                        <div class="info_block-content">
                            <UnLazyImage
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-moscow.png"
                                blurhash="CLJYu1Rk{g%2Q-RjMxxu"
                                auto-sizes
                                alt="Правительство Москвы"
                                class="image"
                            />
                            <p>
                                Правительство <br>
                                Москвы
                            </p>
                        </div>
                        <div class="info_block-content">
                            <p>
                                Комитет <br>
                                по архитиктуре <br>
                                и правительству <br>
                                города Москвы
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block__bottom"
                v-motion
                :initial="{ opacity: 0, y: -10 }"
                :enter="{ opacity: 1, y: 0 }"
                :visible="{ opacity: 1, y: 0 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="400"
            >
                <div class="block__bottom-left">
                    <button class="button-impaired" type="button" aria-label="The main Architectural and Planning Department of Moscow Architecture" title="Главное архитектурно-планировочное управление Москомархитектуры">
                        <UnLazyImage
                            src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-logo.png"
                            blurhash="CMJ[r59G01ae^+IV^+~V"
                            auto-sizes
                            alt="Главное архитектурно-планировочное управление Москомархитектуры"
                            class="image"
                        />
                        <a href="/" rel="noopener noreferrer">
                            Главное архитектурно-планировочное <br>
                            управление Москомархитектуры
                        </a>
                    </button>
                </div>
                <div class="block__bottom-middle">
                    <nav class="block_links">
                        <ul>
                            <li>
                                <router-link to="/" class="link" title="о нас">
                                    о нас
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="link" title="виды работ">
                                    виды работ
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="link" title="структура">
                                    структура
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="link" title="новости">
                                    новости
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="link" title="контакты">
                                    контакты
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="block__bottom-right">
                    <div class="block-social">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <button class="button-link" type="button" aria-label="Odnoklassniki" title="Одноклассники">
                                <UnLazyImage
                                    src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Odnoklass.png"
                                    blurhash="CMJ[r59G01ae^+IV^+~V"
                                    auto-sizes
                                    alt="Одноклассники"
                                    class="image"
                                />
                            </button>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <button class="button-link" type="button" aria-label="vk" title="Вконтакте">
                                <UnLazyImage
                                    src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/VK.png"
                                    blurhash="CMJ[r59G01ae^+IV^+~V"
                                    auto-sizes
                                    alt="Вконтакте"
                                    class="image"
                                />
                            </button>
                        </a>
                    </div>
                    <button class="button" type="button" aria-label="Submit your application" title="Оставить заявку">
                        <p>
                            Оставить заявку
                        </p>
                    </button>
                </div>
            </div>
        </div>
        <div class="header_mobile__container"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0 }"
            :visible="{ opacity: 1, y: 0 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="200"
        >
            <div class="grid">
                <div class="mobile_left">
                    <div class="block__bottom-left">
                        <button class="button-impaired" type="button" aria-label="The main Architectural and Planning Department of Moscow Architecture" title="Главное архитектурно-планировочное управление Москомархитектуры">
                            <UnLazyImage
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-logo.png"
                                blurhash="CMJ[r59G01ae^+IV^+~V"
                                auto-sizes
                                alt="Главное архитектурно-планировочное управление Москомархитектуры"
                                class="image"
                            />
                            <a href="/" rel="noopener noreferrer">
                                Главное архитектурно-планировочное <br>
                                управление Москомархитектуры
                            </a>
                        </button>
                    </div>
                </div>
                <div class="mobile-right">
                    <div class="menu" @click="store.showMobileMenu = !store.showMobileMenu">
                        <div class="menu-line"/>
                        <div class="menu-line"/>
                        <div class="menu-line"/>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="menu" mode="out-in">
            <MobileMenu v-if="store.showMobileMenu"/>
        </Transition>
        <Transition name="page" mode="out-in">
            <div class="backdrop" v-if="store.showMobileMenu" @click="store.showMobileMenu = !store.showMobileMenu"/>
        </Transition>
    </menu>
</template>
<style lang="scss" scoped>
.header_container{
    position: relative;
    width: 100vw;
    height: 100%;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;

    &-block{
        position: relative;
        width: 100%;
        max-width: var(--maxWidth);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;


        .block__top{
            width: 100%;
            height: 45px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--grey);

            &-left{
                display: flex;

                .button-link{
                    font-size: 12px;
                    font-weight: 800;
                    margin-right: 75px;
                    background-color: transparent;
                }
            }
            &-right{
                display: flex;
                justify-content: flex-end;

                .button-impaired{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: left;
                    background-color: transparent;

                    a{
                        margin-left: 8px;
                        font-size: 8px;
                        line-height: 8px;
                        font-weight: 700;
                    }
                }
                .info_block{
                    display: flex;
                    align-items: center;
                    margin-left: 60px;

                    &-content{
                        display: flex;
                        align-items: center;
                        font-size: 8px;
                        font-weight: 700;
                        line-height: 8px;

                        .image{
                            width: 17px;
                            height: 19px;
                            object-fit: contain
                        }

                        &:first-child{

                            p{
                                margin-left: 5px;
                            }
                        }
                        &:last-child{
                            margin-left: 10px;

                            &::before{
                                content: '';
                                width: 1px;
                                height: 35px;
                                background-color: var(--grey);
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
        .block__bottom{
            width: 100%;
            height: calc(100% - 45px);
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-left{

                .button-impaired{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: left;
                    background-color: transparent;

                    a{
                        margin-left: 10px;
                        font-size: 12px;
                        line-height: normal;
                        font-weight: 700;
                        color: var(--blue);
                    }
                }
            }

            &-middle{

                ul, li, .block_links{
                    display: flex;

                    a{
                        margin-right: 45px;
                        font-size: 12px;
                        padding: 10px 0;
                        text-transform: uppercase;
                        line-height: normal;
                        font-weight: 700;
                        transition: all 0.25s ease;


                        @media (hover: hover) {
                            &:hover{
                                transform: translateY(-5px);
                                color: var(--blue);
                            }
                        }

                        &:active{
                            color: var(--white);
                        }
                    }
                    li:last-child a{
                        margin-right: 0px;
                    }
                }
            }

            &-right{
                display: flex;
                align-items: center;

                .block-social{
                    display: flex;
                    align-items: center;

                    .button-link{
                        width: 16px;
                        height: 16px;
                        background-color: transparent;
                    }

                    a:last-child{
                        margin-left: 12px;
                    }
                }

                .button{
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--white);
                    background-color: var(--blue);
                    border: 1px solid var(--blue);
                    padding: 9px 18px;
                    margin-left: 40px;
                    transition: all 0.25s ease;

                    @media (hover: hover) {
                        &:hover{
                            color: var(--blue);
                            background-color: var(--white);
                            border: 1px solid var(--blue);
                        }
                    }

                    &:active{
                        color: var(--white);
                        background-color: var(--blue);
                        border: 1px solid var(--blue);
                    }
                    
                }
            }
        }
    }
}
.scrolled{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1440px) {
    .header_container-block {
        .block__top-left .button-link{
            margin-right: 10px;
        }
        .block__top-right .info_block{
            margin-left: 20px;
        }
    }
    .header_container-block .block__bottom-middle ul a,
    .header_container-block .block__bottom-middle li a, 
    .header_container-block .block__bottom-middle .block_links a{
        margin-right: 10px;
    }
}
@media screen and (max-width: 1020px) {
    .header_container-block{
        opacity: 0;
        display: none;
    }
    .header_mobile__container{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center
    }
    .grid{
        position: relative;
        width: 100%;
        max-width: var(--maxWidth);
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .block__bottom-left{

            .button-impaired{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
                background-color: transparent;

                a{
                    margin-left: 10px;
                    font-size: 12px;
                    line-height: normal;
                    font-weight: 700;
                    color: var(--blue);
                }
            }
        }
        .mobile-right{
            .menu{
                width: 50px;
                height: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                .menu-line{
                    width: 100%;
                    height: 3px;
                    border-radius: 20px;
                    background-color: var(--blue);

                    &:nth-child(1){

                    }
                }
            }
        }
    }
    .backdrop{
        position: fixed;
        top: 80px;
        left: 0;
        width: calc(100vw - 0px);
        height: calc(100vh - 80px);
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        z-index: 10;
    }
}
</style>