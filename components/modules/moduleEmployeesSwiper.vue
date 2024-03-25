<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
    data: () => ({
        countSlide: 6,
    }),
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted(){
    const screenWidth = document.documentElement.clientWidth;
    if(screenWidth < 1920){
        this.countSlide = 6;
    }
    if(screenWidth < 1800){
        this.countSlide = 5;
    }
    if(screenWidth < 1440){
        this.countSlide = 4;
    }
    if(screenWidth <= 1020){
        this.countSlide = 3;
    }
    if(screenWidth <= 800){
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
        class="swiper__news"
    >
        <swiper-slide v-for="a in 10">
            <div class="title">
                <p>
                    700+
                </p>
            </div>
            <div class="text">
                <p>
                    Сотрудников в штате
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
    width: auto;
    height: auto;

    .title{
        font-size: 90px;
        font-weight: 800;
        color: var(--black);
        margin-bottom: 5px;
    }
    .text{
        font-size: 12px;
        font-weight: 600;
        color: var(--black);
    }
}
@media screen and (max-width: 1200px) {
    .swiper-slide{
        .title{
            font-size: 70px;
        }
    }
}
@media screen and (max-width: 800px) {
    .swiper-slide{
        .title{
            font-size: 50px;
        }
    }
}
</style>