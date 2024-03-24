<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Mousewheel, Autoplay } from 'swiper/modules';

export default {
    data: () => ({
        countSlide: 7,
    }),
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted(){
    const screenWidth = document.documentElement.clientWidth;
    if(screenWidth < 1920){
        this.countSlide = 7;
    }
    else if(screenWidth < 1800){
        this.countSlide = 5;
    }
    else if(screenWidth < 1440){
        this.countSlide = 4;
    }
    else if(screenWidth < 1020){
        this.countSlide = 3;
    }
  },
  setup() {
    return {
      modules: [Mousewheel, Autoplay],
    };
  },
};
</script>
<template>
    <swiper
        :direction="'vertical'"
        :grabCursor="true"
        :slidesPerView="countSlide"
        :spaceBetween="30"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: true,
        }"
        :mousewheel="true"
        :modules="modules"
        class="swiper__news"
    >
        <swiper-slide v-for="a in 10">
            <div class="title">
                <h4>
                    22.03.2024
                </h4>
            </div>
            <div class="text">
                <p>
                    Проекты КРТ создадут новые точки притяжения в столице – эксперт
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>
  
<style lang="scss" scoped>
.swiper__news{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 230px;
    min-height: 100px;
    height: fit-content;
    border-radius: 10px;
    padding: 12px;
    background-color: var(--white);
    transition: all 0.25s ease;
    overflow-y: auto;

    .title{
        font-size: 12px;
        font-weight: 800;
        color: var(--blue);
        margin-bottom: 5px;
    }
    .text{
        font-size: 12px;
        font-weight: 700;
        color: var(--black);
    }

    @media (hover: hover) {
        &:hover{
            transform: scale(0.9);
            box-shadow: 0 0 10px color-mix(in srgb, var(--blue) 50%, var(--white));
        }
    }

    &:active{
        transform: scale(0.95);
    }
}
</style>