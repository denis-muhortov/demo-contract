<script lang="ts">
export default {
    data: () => ({
        store: useAppStore(),
    }),
    methods: {

    },
    mounted(){},
    computed:{},
}
</script>
<template>
    <aside class="menu">
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
        <button class="button" type="button" aria-label="Submit your application" title="Оставить заявку">
            <p>
                Оставить заявку
            </p>
        </button>
        <hr>
        <div class="content-middle">
            <button class="button-impaired" type="button" aria-label="Version for the visually impaired" title="Версия для слабовидящих">
                <UnLazyImage
                    src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Group.png"
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
            <div class="block-social">
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
                <div class="container-networks">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <button class="button-link" type="button" aria-label="Odnoklassniki" title="Одноклассники">
                            <UnLazyImage
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Odnoklass-big.png"
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
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/VK-big.png"
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
        <hr>
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

    </aside>
</template>
<style lang="scss" scoped>
.menu{
    position: fixed;
    top: 80px;
    right: 0;
    width: 300px;
    height: calc(100vh - 80px);
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 10px 80px 10px;
    z-index: 11;
    transition: all 0.25s ease;

    .block_links{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;

        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            li{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                
                a{
                    display: flex;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .button{
        width: 100%;
        font-size: 16px;
        font-weight: 700;
        color: var(--white);
        background-color: var(--blue);
        border: 1px solid var(--blue);
        padding: 9px 18px;
        margin-bottom: 20px;
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

    hr{
        width: 100%;
        height: 2px;
        background-color: var(--black);
        margin-bottom: 20px;
    }

    .button-impaired{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        background-color: transparent;

        a{
            margin-left: 12px;
            font-size: 16px;
            font-weight: 700;
        }
    }
    .content-middle{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .block-social{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .button-link{
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 10px;
            background-color: transparent;
        }

        .container-networks{
            width: 100%;
            display: flex;
            margin-top: 10px;
            justify-content: space-around;

            a{
                width: 30px;
                height: 30px;

                .button-link{
                    width: 100%;
                    height: 100%;

                    .image{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
            }
        }
    }
    .info_block{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 10px;

        &-content{
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 700;
            line-height: 12px;

            .image{
                width: 50px;
                height: 50px;
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
                    height: 50px;
                    background-color: var(--grey);
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>