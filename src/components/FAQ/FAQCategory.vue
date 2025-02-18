<template>
    <div class="FAQCategory p-4 rounded-xl shadow-[2px_1px_5px_#e2e2e2]">
        <div class="wrapper">
            <div class="flex gap-2">
                <!-- <div class="icon">ic</div> -->
                <h2 class="title text-[17px] font-bold mb-4">{{ title }}</h2>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        default: 'Title of Category',
        type: String,
    }
})
</script>