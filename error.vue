<template>
  <main class="flex h-screen w-screen flex-col items-center justify-center">
    <div class="text-center">
      <p class="text-3xl font-700">{{ $props.error.statusCode }}</p>
      <p class="text-gray-600 mb-5 mt-5 text-base leading-7">Error: {{ $props.error.url }}</p>
      <p class="text-gray-600 mb-5 mt-5 text-base leading-7">{{ $props.error.message }}</p>
      <button type="button" @click="handleError"> Home </button>
    </div>
  </main>
</template>

<script setup>
  const props = defineProps({
    error: Object,
  });

  const handleError = () => clearError({ redirect: "/" });
</script>
