<template>
  <div class="w-[500px] mx-auto">
    <div class="text-center">
    <h1>Custom INFOMATION</h1>

    </div>
    <v-card class="px-3 py-3">
      <div class="flex justify-between px-[20px]">
        <div >
          <div>
            <span class="text-blue-500">Name: </span>
            <span>{{ $route.params.name }}</span>
          </div>
          <div>
            <span class="text-blue-500">Gender: </span>
            <span>{{ $route.params.gender }}</span>
          </div>
          <div>
            <span class="text-blue-500">Age: </span>
            <span>{{ $route.params.age }}</span>
          </div>
          <div>
            <span class="text-blue-500">Title: </span>
            <span>{{ $route.params.title }}</span>
          </div>
        </div>
        <div>
          <p class="text-blue-500">Genre</p>
          <p v-for="(i, index) in $route.params.Category" :key="index">
            {{ i }}
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>