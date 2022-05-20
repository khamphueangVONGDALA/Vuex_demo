<template>
  <div class="mt-[20px]">
    <FormInput />
    <ListCustom />
  </div>
</template>

<script>
import ListCustom from "../components/custom/listCustom.vue";
import FormInput from "../components/form/FormInput.vue";


export default {
  name: "adMin",
  components: {
    FormInput,
    ListCustom,
  },
  setup() {

  },
};
</script>
