<template>
  <div>
    <v-card
      v-for="(item, index) in data"
      :key="index"
      class="w-[700px] mx-auto h-auto mt-3 hover:bg-green-500 hover:text-white"
    >
      <router-link
        :to="{
          name: 'blog_detail',
          params: {
            id: item.id,
            name: item.name,
            title: item.title,
            blog: item.blog,
          },
        }"
      >
        <div class="flex  py-3 px-3 text-justify">
          <div>
            <div class="px-3">
              <p class="text-blue-500">Title:</p>
              <p>{{ item.title }}</p>
            </div>
            <div class="px-3">
              <p class="text-blue-500">Genre</p>
              <ul>
                <li
                  v-for="(i, index) in item.Category"
                  :key="index"
                  class="whitespace-nowrap"
                >
                  {{ i }}
                </li>
              </ul>
            </div>
          </div>

          <div class="px-3 ml-[20px]">
            <p class="text-blue-500">Blog:</p>
            <p>{{ truncase(item.blog, 150) }}</p>
          </div>
        </div>
      </router-link>
    </v-card>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const data = computed(() => store.state.blogStore.arr);
    // const data = () => {
    //   // return store.getters.getdata;
    //   return store.state.blogStore.arr;
    // };

    function truncase(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return { data, truncase };
  },
};
</script>
