<script lang="ts">
export default {
    data: () => ({

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
    <div class="footer_container"
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ opacity: 1, y: 0 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="200"
    >
        <div class="footer_block-left">
            <p class="text">
                All Rights Reserved.
            </p>
        </div>
        <div class="footer_block-right">
            <p class="text">
                2024
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer_container{
    width: 90vw;
    max-width: var(--maxWidth);
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--black);
    border-radius: 30px;
    margin-bottom: 50px;
}
.footer_block{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-left{
        margin-left: 20px;
    }
    &-right{
        margin-right: 20px;
    }
}
.text{
    font-size: 20px;
    font-weight: 700;
    color: var(--black-lite);
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