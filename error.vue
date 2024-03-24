<script setup>
  const props = defineProps({
    error: Object,
  });

  const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main class="container">
    <div class="block">
      <p class="title">
        Ошибка: 
          <span>
            {{ $props.error.statusCode }}
          </span>
      </p>
      <p class="text">{{ $props.error.message }}</p>
      <button type="button" @click="handleError"> Вернуться на главную </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title{
      font-size: 36px;
      margin-bottom: 10px;

      span{
        font-weight: 700;
        color: var(--blue);
      }
    }
    .text{
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  button{
      font-size: 18px;
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
}
</style>