<script>
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    data() {
        return {
            swiper: null,
            isMobile: false,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted(){
        const screenWidth = document.documentElement.clientWidth;
        if(screenWidth < 1020){
            this.isMobile = true;
        }
    },
    methods: {
        prevSlide() {
            this.swiper?.slidePrev();
        },
        nextSlide() {
            this.swiper?.slideNext();
        },
        onSwiper(swiper) {
            this.swiper = swiper;
        },
    },

};
</script>
<template>
<swiper :slidesPerView="1" :grabCursor="true" :spaceBetween="30" :loop="true" :modules="modules" class="swiper__project" @swiper="onSwiper">
    <swiper-slide v-for="a in 10">
        <div class="block-top">
            <div class="block-top-title">
                <h3>
                    Наши проекты
                </h3>
            </div>
            <div class="block-top-navigation">
                <UnLazyImage src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Vector.png" blurhash="CPLqe99F~qoffQj[j[fQ" auto-sizes alt="Предыдущий слайд" class="arrow__left" @click="prevSlide()" />
                <UnLazyImage src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Vector.png" blurhash="CPLqe99F~qoffQj[j[fQ" auto-sizes alt="Следующий слайд" class="arrow__right" @click="nextSlide()" />
            </div>
        </div>
        <div class="block-bottom">
            <div class="block-bottom-content">
                <h4>
                    Проект планировки территории <br>
                    ЖК “Прайм Тайм”
                </h4>
                <p>
                    Хочет иметь удобный доступ к своим финансовым счетам и операциям в любое время и из любой точки мира
                </p>
                <p>
                    Интересуется управлением своими инвестициями и возможностями для увеличения своего капитала
                </p>
                <p>
                    Желает получать персонализированные предложения и рекомендации по финансовым продуктам
                </p>
            </div>
            <div class="block-bottom-image">
                <UnLazyImage v-if="!isMobile" src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Rectangle-2827.webp" blurhash="C]Hek7WVWBf6~qWVWUj[" auto-sizes alt="Проект планировки территории" class="image" />
                <UnLazyImage v-else src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/project_mobile.webp" blurhash="C]Hek7WVWBf6~qWVWUj[" auto-sizes alt="Проект планировки территории" class="image" />
            </div>
        </div>
    </swiper-slide>
</swiper>
</template>

<style lang="scss" scoped>
.swiper__project {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    height: auto;

    .block-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        &-title {
            font-size: 90px;
            font-weight: 800;
            color: var(--black);
        }

        &-navigation {
            display: flex;

            .arrow__left {
                width: 31px;
                height: 52px;
                object-fit: contain;
                transform: rotate(180deg);
                margin-right: 60px;
                transition: all 0.25s ease;
                cursor: pointer;

                @media (hover: hover) {
                    &:hover{
                        transform: rotate(180deg) scale(0.8);
                    }
                }

                &:active{
                    transform: rotate(180deg) scale(0.95);
                }
            }

            .arrow__right {
                width: 31px;
                height: 52px;
                object-fit: contain;
                transition: all 0.25s ease;
                cursor: pointer;

                @media (hover: hover) {
                    &:hover{
                        transform: scale(0.8);
                    }
                }

                &:active{
                    transform: scale(0.95);
                }
            }
        }
    }

    .block-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;

        &-content {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 50px;
            border-radius: 25px;
            background-color: var(--white-grey);

            h4 {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 60px;
            }

            p {
                font-size: 28px;
                font-weight: 400;
                margin-bottom: 30px;
            }
        }

        &-image {
            width: 50%;
            height: 100%;
            border-radius: 25px;
            overflow: hidden;

            .image {
                width: 100%;
                height: 100%;
                max-height: 670px;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 1800px) {
    .swiper-slide {
        .block-bottom-image .image{
            max-height: fit-content;
        }
        .block-top-title{
            font-size: 60px;
        }
        .block-bottom-content{
            padding: 30px;
        }
        .block-bottom-content h4{
            font-size: 24px;
        }
    }
}
@media screen and (max-width: 1240px) {
    .swiper-slide {
        .block-top-title{
            font-size: 36px;
        }
        .block-top-navigation .arrow__right,
        .block-top-navigation .arrow__left{
            width: 26px;
            height: 42px;
        }
        .block-bottom{
            flex-direction: column-reverse;
        }
        .block-bottom-content{
            width: 100%;
            height: fit-content;
            padding: 30px;
        }
        .block-bottom-image{
            width: 100%;
            height: 400px;
        }
    }
}
@media screen and (max-width: 1020px) {
    .swiper-slide {
        .block-top-title{
            font-size: 24px;
        }
        .block-top-navigation .arrow__right,
        .block-top-navigation .arrow__left{
            width: 18px;
            height: 36px;
        }
        .block-top-navigation .arrow__left{
            margin-right: 30px;
        }
        .block-bottom-content h4{
            font-size: 18px;
        }
        .block-bottom-content p{
            font-size: 18px;
        }
        .block-bottom-image{
            height: 200px;
            margin-bottom: 20px;
        }
    }
}
</style>
