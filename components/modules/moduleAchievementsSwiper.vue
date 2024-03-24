<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
    data: () => ({
        countSlide: 4,
    }),
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted(){
    const screenWidth = window.screen.width
    if(screenWidth <= 1920){
        this.countSlide = 4;
    }
    if(screenWidth <= 640){
        this.countSlide = 2;
    }
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
<template>
    <swiper
        :slidesPerView="countSlide"
        :spaceBetween="30"
        :grabCursor="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
        }"
        :modules="modules"
        class="swiper__achievements"
    >
        <swiper-slide v-for="a in 10">
            <div class="title">
                <h4>
                    1 место
                </h4>
            </div>
            <div class="text">
                <p>
                    Реновация промышленной  <br>
                    территории КУБ-500
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>
  
<style lang="scss" scoped>
.swiper__achievements{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    height: auto;

    .title{
        font-size: 90px;
        font-weight: 800;
        color: var(--black);
    }
    .text{
        font-size: 12px;
        font-weight: 600;
        color: var(--black);
    }
}

@media screen and (max-width: 1800px) {
    .swiper-slide{
        .title{
            font-size: 60px;
        }
    }
}
@media screen and (max-width: 1240px) {
    .swiper-slide{
        .title{
            font-size: 36px;
        }
    }
}
@media screen and (max-width: 800px) {
    .swiper-slide{
        .title{
            font-size: 24px;
        }
    }
}
@media screen and (max-width: 640px) {
    .swiper-slide{
        .title{
            font-size: 18px;
        }
    }
}
</style>