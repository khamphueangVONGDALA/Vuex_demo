<template>
<div>
  <div class="bg-blue-700 text-white mx-auto flex h-[50px] items-center">
    <router-link to="/admin" class="ml-3">admin</router-link>
    <router-link to="/custom" class="ml-3">custom</router-link>
    <router-link to="/blog" class="ml-3">blog</router-link>
  </div>
    <router-view />

</div>

</template>

<script>
export default {
  name: "App",

  setup() {


  },
};
</script>
