<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
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
        :slidesPerView="4"
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
</style>