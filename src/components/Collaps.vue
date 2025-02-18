<template>
    <div class="faq-item">
        <button @click="toggleAnswer" class="faq-question" :aria-expanded="isOpen">
            {{ question }}
            <span class="icon" :class="{ 'icon-rotated': isOpen }">▼</span>
        </button>
        <Transition name="slide">
            <div v-show="isOpen" class="faq-answer">
                <div class="faq-answer-content">
                    <div class="min-h-[50px]">
                        {{ answer }}
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

const isOpen = ref(false);

const toggleAnswer = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.faq-item {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-bottom: 10px;
}

.faq-question {
    width: 100%;
    text-align: left;
    padding: 15px;
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
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