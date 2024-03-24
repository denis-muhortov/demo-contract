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
        };
    },
    components: {
        Swiper,
        SwiperSlide,
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
                <UnLazyImage src="https://tbhhbwhszmtjaznapwbc.supabase.co/storage/v1/object/public/demo/Rectangle-2827.webp" blurhash="C]Hek7WVWBf6~qWVWUj[" auto-sizes alt="Проект планировки территории" class="image" />
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
</style>
