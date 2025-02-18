<template>
    <div class="w-full ">
        <div class="relative">
            <input type="text" v-model="model" @input="onSearch" @focus="isFocused = true" @blur="isFocused = false"
                placeholder=""
                class="text-gray-500 md:text-md text-sm bg-white w-full pl-10 pr-4 py-[6px] rounded-full my-shadow outline-none off-shadow transition duration-200 ease-in-out" />
            <div class="absolute inset-y-0 left-0 top-[1px] pl-3 flex items-center pointer-events-none">
                <i class="fa fa-search h-5 w-5  " :class="isFocused ? 'text-blue-400 ' : 'text-gray-300'"></i>
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
}

.off-shadow:focus {
    box-shadow:0 0 4px #69b7ff;
}
</style>
