<template>
  <v-card class="max-w-[500px] mx-auto px-3 py-3">
    <div class="text-center">
      <h1 class="py-3 uppercase">Write Blog</h1>
    </div>
    <form class="">
      <div class="form-control">
        <div>
          <v-text-field
            label="Name:"
            type="text"
            hide-details="auto"
            v-model="infomation.name"
          ></v-text-field>
        </div>
      </div>

      <div class="form-control">
        <div>
          <v-text-field
            label="Age:"
            e="text"
            hide-details="auto"
            type="Number"
            v-model="infomation.age"
          ></v-text-field>
        </div>
      </div>

      <div class="form-control">
        <p class="text-blue-500">Gender</p>
        <div>
          <v-radio
            color="secondary"
            label="male"
            type="checkbox"
            v-model="infomation.gender"
            value="male"
          ></v-radio>
        </div>
        <div>
          <v-radio
            color="secondary"
            label="female"
            type="checkbox"
            v-model="infomation.gender"
            value="female"
          ></v-radio>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="form-control">
          <p class="text-blue-500">Genre</p>

          <div>
            <v-radio
              color="secondary"
              label="Xã hội"
              type="checkbox"
              value="Xã hội"
              v-model="infomation.Category"
            ></v-radio>
          </div>
          <div>
            <v-radio
              color="secondary"
              label="Khoa học"
              type="checkbox"
              value="Khoa học"
              v-model="infomation.Category"
            ></v-radio>
          </div>
          <div>
            <v-radio
              color="secondary"
              label="khám phá"
              type="checkbox"
              value="khám phá"
              v-model="infomation.Category"
            ></v-radio>
          </div>
        </div>
      </div>
      <div class="form-control">
        <div>
          <v-text-field
            label="Title"
            type="text"
            hide-details="auto"
            v-model="infomation.title"
          ></v-text-field>
        </div>
      </div>
      <div>
        <v-textarea
          outlined
          name="input-7-4"
          label="Write Blog"
          v-model="infomation.blog"
        ></v-textarea>
      </div>

      <div class="flex justify-center">
        <v-btn depressed color="primary" @click.prevent="HandleSubmitForm"
          >Submit</v-btn
        >
      </div>
    </form>
  </v-card>
</template>

<script>
import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
export default {
  setup() {
    const infomation = reactive({
      id: "",
      name: "",
      blog: "",
      title: "",
      age: 20,
      Category: [],
      gender: "",
    });

    const store = useStore();
    const HandleSubmitForm = () => {
      const data2 = {
        id: uuidv4(),
        name: infomation.name,
        blog: infomation.blog,
        title: infomation.title,
        age: infomation.age,
        Category: infomation.Category,
        gender: infomation.gender,
      };
      // const data2 = Object.assign({}, infomation, {id: uuidv4()});
      // infomation.id = uuidv4();
      store.dispatch("blogStore/savedata", data2);

      infomation.name = "";
      infomation.blog = "";
      infomation.title = "";
      infomation.age = 20;
      infomation.Category = [];
      infomation.gender = "";
    };
    return { infomation, HandleSubmitForm };
  },
};
</script>

<style>
</style>