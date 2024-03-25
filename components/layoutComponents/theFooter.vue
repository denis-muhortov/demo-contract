<script lang="ts">
export default {
    data: () => ({
        isMobile: false,
    }),
    methods: {
    },
    mounted(){
        const screenWidth = document.documentElement.clientWidth;
        if(screenWidth <= 640){
            this.isMobile = true;
        }
    },
    computed:{

    },
}
</script>
<template>
    <div class="footer_container"
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ opacity: 1, y: 0 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="200"
    >
        <div class="grid">
            <div class="block__top">
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
                    <nav class="block_links">
                        <ul>
                            <li>
                                <router-link to="/" class="link" title="Политика конфиденциальности">
                                    Политика конфиденциальности
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="link" title="Противодействие коррупции">
                                    Противодействие коррупции
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="link" title="Контакты">
                                    Контакты
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                    <button class="button-impaired" type="button" aria-label="Version for the visually impaired" title="Версия для слабовидящих">
                        <UnLazyImage
                            src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-glasses.png"
                            blurhash="CMK1%fWBD%M{~qayWBWB"
                            auto-sizes
                            alt="Слабовидящим"
                            class="image"
                        />
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Версия <br>
                            для слабовидящих
                        </a>
                    </button>
                </div>
            </div>
            <div class="block__middle">
                <div class="block__middle-left">
                    <p>
                        2024 © Государственное бюджетное учреждение города Москвы <br>
                        «Главное архитектурно-планировочное управление Москомархитектуры» (ГБУ «ГлавАПУ»)
                    </p>
                </div>
                <div class="block__middle-right">
                    <button v-if="isMobile" class="button-impaired" type="button" aria-label="The main Architectural and Planning Department of Moscow Architecture" title="Главное архитектурно-планировочное управление Москомархитектуры">
                        <UnLazyImage
                            src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-logo.png"
                            blurhash="CMJ[r59G01ae^+IV^+~V"
                            auto-sizes
                            alt="логотип"
                            class="image"
                        />
                        <a href="/" rel="noopener noreferrer">
                            Главное архитектурно-планировочное <br>
                            управление Москомархитектуры
                        </a>
                    </button>
                </div>
            </div>
            <div class="block__bottom">
                <div class="block__bottom-left">
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
                    <button v-if="!isMobile" class="button-impaired" type="button" aria-label="The main Architectural and Planning Department of Moscow Architecture" title="Главное архитектурно-планировочное управление Москомархитектуры">
                        <UnLazyImage
                            src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-logo.png"
                            blurhash="CMJ[r59G01ae^+IV^+~V"
                            auto-sizes
                            alt="логотип"
                            class="image"
                        />
                        <a href="/" rel="noopener noreferrer">
                            Главное архитектурно-планировочное <br>
                            управление Москомархитектуры
                        </a>
                    </button>
                </div>
                <div class="block__bottom-right">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <button class="button-link" type="button" aria-label="Odnoklassniki" title="Одноклассники">
                            <UnLazyImage
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Odnoklass-blue.png"
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
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/VK-blue.png"
                                blurhash="CMJ[r59G01ae^+IV^+~V"
                                auto-sizes
                                alt="Вконтакте"
                                class="image"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer_container{
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    background-color: var(--white-grey-dark);

    .block__top{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;

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

                .image{
                    width: 21px;
                    height: 15px;
                    object-fit: contain;
                }
            }

            ul, li, .block_links{
                display: flex;

                a{
                    margin-right: 45px;
                    font-size: 12px;
                    padding: 10px 0;
                    color: var(--blue);
                    text-transform: uppercase;
                    line-height: normal;
                    font-weight: 700;
                    transition: all 0.25s ease;


                    @media (hover: hover) {
                        &:hover{
                            transform: translateY(-5px);
                            color: var(--black);
                        }
                    }

                    &:active{
                        color: var(--blue);
                    }
                }
            }
        }
    }
    .block__middle{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-left{
            display: flex;

            p{
                font-size: 12px;
                font-weight: 600
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
                margin-top: 20px;
                background-color: transparent;

                a{
                    margin-left: 10px;
                    font-size: 12px;
                    line-height: normal;
                    font-weight: 700;
                    color: var(--blue);
                }

                .image{
                    width: 24px;
                    height: 38px;
                    object-fit: contain;
                }
            }
        }  
    }
    .block__bottom{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-left{
            display: flex;

            .info_block{
                display: flex;
                align-items: center;
                margin-right: 40px;

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

                .image{
                    width: 24px;
                    height: 38px;
                    object-fit: contain;
                }
            }
        }
        &-right{
            display: flex;
            justify-content: flex-end;

            .button-link{
                width: 16px;
                height: 16px;
                background-color: transparent;

                .image{
                    width: 16px;
                    height: 16px;
                    object-fit: contain;
                }
            }

            a:last-child{
                margin-left: 12px;
            }
        }
    }
}
.grid{
    position: relative;
    width: 100%;
    max-width: var(--maxWidth);
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 1800px) { 
    .footer_container{
        .block__top{
            &-left{
                .button-link{
                    margin-right: 25px;
                }
            }
            &-right{
                ul, li, .block_links{
                    a{
                        margin-right: 25px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1440px) { 

}
@media screen and (max-width: 1240px) { 
    .footer_container{
        .block__top{
            flex-direction: column;
        }
        .block__middle{
            flex-direction: column;

            &-left{
                p{
                    text-align: center;
                }
            }
        }
    }
}
@media screen and (max-width: 1020px) { 

}
@media screen and (max-width: 800px) { 
    .footer_container{
        .block__top{
            &-left{
                .button-link{
                    margin-right: 15px;
                }
            }
            &-right{
                margin-top: 20px;

                ul, li, .block_links{
                    a{
                        text-align: center;
                        margin-right: 15px;
                    }
                }
            }
        }
        .block__middle{
            margin-top: 20px;
        }
        .block__bottom{
            margin-top: 20px;
        }
    }
}
@media screen and (max-width: 640px) { 
    .footer_container{
        .block__top{

            &-left{
                flex-direction: column;

                .button-link{
                    margin-right: 0px;
                }
            }
            &-right{
                flex-direction: column;
                align-items: center;

                ul, .block_links{
                    flex-direction: column;
                } 
                li{
                    display: flex;
                    justify-content: center;

                    a{
                        margin-right: 0px;
                        text-align: center;
                        display: flex;
                    }
                }

                .button-impaired{
                    margin-top: 10px;
                }
            }
        }
    }
}
@media screen and (max-width: 380px) { 

}


@media screen and (max-width: 640px) {
    .text{
        font-size: 16px;
    }
    .footer_block{
        &-right{
            text-align: right;
            width: 200px;
        }
    }   
}
@media screen and (max-width: 380px) {
    .text{
        font-size: 14px;
    }
    .footer_block{
        &-right{
            text-align: right;
            width: 200px;
        }
    }     
}
</style>