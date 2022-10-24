<template>
    <!-- - is used to represent unloaded numbers -->
  <span v-if="props.value==='-'">{{props.value}}</span>
  <vue3-autocounter
  v-else
    ref="counter"
    :startAmount="startAmount"
    :endAmount="endAmount"
    :duration="2"
    :suffix="' ' + props.suffix"
    separator=","
    decimalSeparator="."
    :decimals="props.decimals"
  />
</template>

<script setup>
import Vue3Autocounter from "vue3-autocounter";
import { watch, ref, computed } from "vue";

const props = defineProps({
  value: {},
  suffix: {},
  decimals: {},
});

const values = ref([0, props.value]);

const startAmount = computed(() => {
  return parseFloat(values.value[values.value.length - 2]);
});

const endAmount = computed(() => {
  return parseFloat(values.value[values.value.length - 1]);
});

watch(props, (newProps, oldProps) => {
  values.value.push(newProps.value);
});
</script>

<style lang="scss" scoped></style>
