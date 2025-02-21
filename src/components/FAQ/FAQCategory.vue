<template>
    <div class="bg-white shadow-[2px_1px_5px_#e2e2e2] rounded-xl cursor-move FAQCategory">
        <div class="wrapper">
            <Collaps :title="title" :subtitle="subtitle">
                <slot></slot>
            </Collaps>
            <!-- <div class="flex gap-2">
                <div class="icon">ic</div>
                <h2 class="mb-4 font-bold text-brand text-md md:text-lg title">{{ title }}</h2>
            </div>
            <div>
                <slot></slot>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import Collaps from '@/components/Collaps.vue'

const props = defineProps({
    title: {
        default: 'Title of Category',
        type: String,
    },
    subtitle: {

        type: String,
    },

})
</script>