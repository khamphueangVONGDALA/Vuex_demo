<template>
  <div class="text-center py-3 uppercase">
    <h1>List Blogs</h1>
    <ListBlog />
  </div>
</template>

<script>
import ListBlog from "../components/blog/listBlog.vue";

export default {
  name: "AllBlogs",
  components: {
    ListBlog,
  },
};
</script>

<style>
</style>