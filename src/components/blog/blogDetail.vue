<template>
  <div class="w-[500px] mx-auto " >
    <v-card class="px-3 py-3">
      <h1 class="text-center text-blue-500 uppercase">{{ $route.params.title }}</h1>
      <p class="text-justify">{{ $route.params.blog }}</p>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>