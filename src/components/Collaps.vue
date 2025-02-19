<template>
    <div class="rounded-xl text-[#606060] Collaps" :class="{ 'my-shadow': isOpen }">
        <button @click="toggleAnswer"
            class="flex justify-between items-center gap-3 p-4 w-full font-[600] md:text-md text-sm text-left cursor-pointer"
            :aria-expanded="isOpen">
            <div :class="{'text-[#0e3c70]':isOpen}"> {{ title }}</div>
            <span class="icon" :class="{ 'icon-rotated': isOpen }">

                <i class="fa fa-chevron-down" :class="isOpen ? 'text-[#0e3c70]' : 'text-gray-500 '"></i>

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
    cursor: pointer;   
}

.Collaps:hover {
    box-shadow: 0px 0px 5px #0e3c7059;
    
}
.Collaps button:hover {
    color: #0e3c70;
}
.Collaps button:hover i {
    color: #0e3c70;
}
.icon {
    transition: transform 0.3s ease;
    transform: scale(0.8);
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