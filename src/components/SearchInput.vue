<template>
    <div class="w-full">
        <div class="relative">
            <input type="text" v-model="model" @input="onSearch" @focus="isFocused = true" @blur="isFocused = false"
                placeholder=""
                class="bg-white my-shadow off-shadow py-[8px] pr-4 pl-10 rounded-full outline-none w-full text-gray-500 md:text-md text-sm transition duration-200 ease-in-out" />
            <div class="top-[1px] left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                <i class="w-5 h-5 fa fa-search" :class="isFocused ? 'text-brand ' : 'text-gray-300'"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const model = defineModel()

const isFocused = ref(false)
const onSearch = () => {
    console.log('Searching for:', model.value);
};



</script>

<style scoped>
.off-shadow {
    /* box-shadow: 0 0 2px #e3e3e3; */
    border: solid 2px white;

}

.off-shadow:focus {
  
    border: solid 2px #0e3c70;
}
</style>
