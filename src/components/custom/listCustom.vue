<template>
  <div>
    <v-card
      v-for="(item, index) in data"
      :key="index"
      class="w-[600px] mx-auto h-auto mt-3"
    >
      <Card>
        <template v-slot:card-content>
          <div class="flex justify-between py-3 px-3">
            <div class="w-[30%]">
              <p class="text-blue-500">id</p>
              <p>{{ item.id }}</p>
            </div>
            <div>
              <p class="text-blue-500">Name</p>
              <p>{{ item.name }}</p>
            </div>
            <div>
              <p class="text-blue-500">Title</p>
              <p>{{ item.title }}</p>
            </div>

            <div>
              <p class="text-blue-500">Genre</p>
              <div>
                <ul>
                  <li v-for="(i, index) in item.Category" :key="index">
                    {{ i }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:card-button>
          <div class="flex justify-center py-3">
            <v-btn color="error" @click="handleDelete(item.id)"> Delete </v-btn>
          </div>
        </template>
      </Card>
    </v-card>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Card from "./Card_Custom.vue";

export default {
  components: { Card },
  setup() {
    const store = useStore();

    const data = computed(() => store.state.blogStore.arr);
    // const data = computed(() => store.getters.getdata);

    // const data = () => {
    //   return store.getters.getdata;
    //   // return store.state.blogStore.arr;
    // };

    const handleDelete = (i) => {
      store.dispatch("blogStore/delete_data", i);
    };

    return { data, handleDelete };
  },
};
</script>
