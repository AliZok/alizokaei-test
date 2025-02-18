<template>
    <div class="FAQCategory">
        <div class="wrapper">
            <div class="flex gap-2">
                <div class="icon">ic</div>
                <h2 class="title text-blue-400">{{ title }}</h2>
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