<template>
    <div class="Collaps rounded-xl text-[#606060]" :class="{ 'my-shadow': isOpen }">
        <button @click="toggleAnswer" class="flex justify-between items-center text-left w-full p-4 font-bold md:text-md text-sm "
            :aria-expanded="isOpen">
            {{ title }}
            <span class="icon" :class="{ 'icon-rotated': isOpen }">

                <i class="fa fa-chevron-down text-gray-500"></i>

            </span>
        </button>
        <Transition name="slide">
            <div v-show="isOpen" class="faq-answer">
                <div class="faq-answer-content">
                    <div class="min-h-[50px]">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    },
});

const isOpen = ref(false);

const toggleAnswer = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.Collaps {
    transition: 0.3s;
}

.Collaps:hover {
    box-shadow: 2px 1px 5px #e2e2e2;
}

.icon {
    transition: transform 0.3s ease;
}

.icon-rotated {
    transform: rotate(180deg);
}

.faq-answer {
    overflow: hidden;
}

.faq-answer-content {
    padding: 15px;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
    max-height: 1000px;
}
</style>