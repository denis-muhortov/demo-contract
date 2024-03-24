<script lang="ts">
export default {
    data: () => ({
        store: useAppStore(),
    }),
    methods: {
    },
    mounted(){

    },
    computed:{

    },
}
</script>
<template>
    <main class="page">
        <section class="screen screen-first">
            <div class="screen-bg">
                <UnLazyImage
                    src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Rectangle-2802.webp"
                    blurhash="CVIM=~57S}r?}[WCX8e:"
                    auto-sizes
                    alt="Главное архитектурно-планировочное управление Москомархитектуры"
                    class="image"
                />
            </div>
            <div class="grid">
                <div class="container__title">
                    <div class="container__title-text">
                        <h1>
                            Создание качественной <br>
                            городской среды
                        </h1>
                    </div>
                    <div class="container__title-blocks">
                        <div class="project" v-for="a in 6">
                            <UnLazyImage
                                src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/123%2013.png"
                                blurhash="CVIM=~57S}r?}[WCX8e:"
                                auto-sizes
                                alt="проект"
                                class="image"
                            />
                            <p>
                                Проекты <br>
                                планировки <br>
                                территории
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container__news">
                    <div class="container__news-title">
                        <h3>
                            Новости
                        </h3>
                    </div>
                    <div class="container__news-module">
                        <ModuleNewsSwiper/>
                    </div>
                </div>
            </div>
        </section>
        <section class="screen screen-second">
            <div class="grid">
                <ModuleEmployeesSwiper/>
            </div>
        </section>
        <section class="screen screen-third">
            <div class="grid">
                <ModuleProjectsSwiper/>
            </div>
        </section>
        <section class="screen screen-fourth">
            <div class="grid">
                <div class="block-top">
                    <h3>
                        Наши учредители
                    </h3>
                </div>
                <div class="block-bottom">
                    <div class="block-bottom-left">
                        <UnLazyImage
                            src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Ellipse-19.webp"
                            blurhash="CpLDc3xt~poe%2WVWBWB"
                            auto-sizes
                            alt="В. Ю. Княжевская "
                            class="image"
                        />
                    </div>
                    <div class="block-bottom-right">
                        <div class="title">
                            <p>
                                В. Ю. Княжевская 
                            </p>
                        </div>
                        <div class="subtitle">
                            <p>
                                Председатель Комитета по архитектуре <br>
                                и градостроительству города Москвы
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                Хочет иметь удобный доступ к своим финансовым счетам и операциям в любое время и из любой точки мира
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                Интересуется управлением своими инвестициями и возможностями для увеличения своего капитала
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                Желает получать персонализированные предложения и рекомендации по финансовым продуктам
                            </p>
                        </div>
                        <div class="info_block">
                            <div class="info_block-content">
                                <UnLazyImage
                                    src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/demo-moscow-big.png"
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
            </div>
        </section>
        <section class="screen screen-fifth">
            <div class="grid">
                <div class="block-top">
                    <h3>
                        О главАПУ
                    </h3>
                </div>
                <div class="block-bottom">
                    <div class="block-bottom-left">
                        <div class="text">
                            <p>
                                Хочет иметь удобный доступ к своим финансовым счетам и операциям в любое время и из любой точки мира
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                Интересуется управлением своими инвестициями и возможностями для увеличения своего капитала
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                Желает получать персонализированные предложения и рекомендации по финансовым продуктам
                            </p>
                        </div>
                    </div>
                    <div class="block-bottom-right">
                        <div class="title">
                            <p>
                                30 лет ГлавАПУ на территории города Москва участвует в:
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                — формировании архитектурного облика
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                — развитии транспортной инфраструктуры
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                — присоединении и освоении новых территорий
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                — реконструкции и перепланировке
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                — благоустройстве и озеленении
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                — программе реновации жилья
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="screen screen-six">
            <div class="grid">
                <div class="block-top">
                    <h3>
                        Наши достижения
                    </h3>
                </div>
                <div class="block-bottom">
                    <ModuleAchievementsSwiper/>
                    <ModuleAchievementsSwiper/>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.page{
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 120px;
    overflow-x: hidden;
}
.grid{
    position: relative;
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.screen{
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-first{
        min-height: 70vh;

        .screen-bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .image{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .container__title{
            padding-top: 40vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            &-text{
                font-size: 90px;
                font-weight: 700;
                color: var(--white);
                padding-bottom: 80px;
            }
            &-blocks{
                width: calc(230px + 230px + 230px + 60px);
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;
                padding-bottom: 65px;
                gap: 20px;

                .project{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 230px;
                    height: 100px;
                    border-radius: 10px;
                    background-color: var(--white);

                    p{
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 12px;
                        margin-left: 16px;
                    }
                }
            }
        }

        .container__news{
            position: absolute;
            top: 0;
            right: 0;
            width: 230px;
            height: 100%;
            overflow: hidden;

            &-title{
                margin-top: 35px;
                font-size: 12;
                font-weight: 600;
                color: var(--white)
            }
            &-module{
                width: 100%;
                height: calc(100% - 35px - 24px - 65px);
            }
        }
    }

    &-second{
        margin-top: 170px;
        margin-bottom: 170px;
    }

    &-third{
        margin-bottom: 220px;
    }

    &-fourth{
        margin-bottom: 220px;

        .block-top{
            width: 100%;
            margin-bottom: 110px;

            h3{
                font-size: 90px;
                font-weight: 700;
                color: var(--black)
            }
        }

        .block-bottom{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            &-left{
                width: 40%;
                max-width: 600px;
                height: 100%;
                margin-right: 130px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;

                .image{
                    border-radius: 50%;
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
            }
            &-right{
                width: calc(100% - 40% - 130px);
                display: flex;
                flex-direction: column;

                .title{
                    font-size: 40px;
                    font-weight: 800;
                    margin-bottom: 10px;
                }
                .subtitle{
                    font-size: 30px;
                    font-weight: 600;
                    margin-bottom: 70px;
                }
                .text{
                    font-size: 28px;
                    font-weight: 400;
                    margin-bottom: 70px;
                }

                .info_block{
                    display: flex;
                    align-items: center;

                    &-content{
                        display: flex;
                        align-items: center;
                        font-size: 15px;
                        font-weight: 700;
                        line-height: 15px;

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
                            margin-left: 30px;

                            &::before{
                                content: '';
                                width: 1px;
                                height: 66px;
                                background-color: var(--grey);
                                margin-right: 30px;
                            }
                        }
                    }
                }
            }
        }
    }

    &-fifth{
        margin-bottom: 230px;

        .block-top{
            width: 100%;
            margin-bottom: 110px;

            h3{
                font-size: 90px;
                font-weight: 700;
                color: var(--black)
            }
        }

        .block-bottom{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 100px;
         
            &-left{
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                background-color: var(--white-grey);
                border-radius: 25px;
                padding: 50px;

                .text{
                    font-size: 30px;
                    font-weight: 500;
                    color: var(--black);
                    margin-bottom: 30px;
                }

            }
            &-right{
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                .title{
                    font-size: 30px;
                    font-weight: 700;
                    color: var(--black);
                    margin-bottom: 30px;
                }
                .text{
                    font-size: 30px;
                    font-weight: 500;
                    color: var(--black);
                }
            }
        }
    }

    &-six{
        margin-bottom: 150px;

        .block-top{
            width: 100%;
            margin-bottom: 110px;

            h3{
                font-size: 90px;
                font-weight: 700;
                color: var(--black)
            }
        }

        .block-bottom{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 40px;
        }
    }
}

</style>
