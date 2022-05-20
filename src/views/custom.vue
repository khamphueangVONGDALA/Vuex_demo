<template>
  <div class="text-center py-3 uppercase">
    <h1>List Customs</h1>
    <div>
      <v-card
        v-for="(item, index) in data"
        :key="index"
        class="
          w-[600px]
          mx-auto
          h-auto
          mt-3
          hover:bg-green-500 hover:text-white
        "
      >
        <router-link
          :to="{
            name: 'custom_detail',
            params: {
              id: item.id,
              name: item.name,
              title: item.title,
              blog: item.blog,
              age: item.age,
              gender: item.gender,
              Category: item.Category,
            },
          }"
        >
          <div class="flex justify-between py-3 px-3 items-center">
            <div>
              <p class="text-blue-500">Name:</p>
              <p>{{ item.name }}</p>
            </div>

            <div>
              <p class="text-blue-500">Age:</p>
              <p>{{ item.age }}</p>
            </div>
            <div>
              <p class="text-blue-500">Title:</p>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </router-link>
      </v-card>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CusTom",

  setup() {
    const store = useStore();
    const data = computed(() => store.state.blogStore.arr);



    // console.log(store.getters.getdata);
    // const data = computed(() => store.getters.blogStore.getdata);

    // const data = () => {
    //   // return store.getters.getdata;
    //   return store.state.blogStore.arr;
    // };

    

    return { data };
  },
};
</script>
