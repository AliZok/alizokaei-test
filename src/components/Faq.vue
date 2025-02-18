<template>
  <div class="Faq">
    <div class="container px-6 pt-[30px]">
      <h1 class=" text-center mb-8 font-bold text-3xl">Frequently Asked Questions</h1>
      <div>
        <div v-for="(items, category) in groupedByCategory" :key="category">
          <FAQCategory :title="category">
            <div>
              <div v-for="(item, index) in items" :key="index">
                {{ item.question }}
              </div>
            </div>
          </FAQCategory>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFunctions } from '@/composables/useFunctions.js'
import { useApi } from '@/composables/useApi.js'
import FAQCategory from '@/components/FAQ/FAQCategory.vue'

const { test } = useFunctions()
const { getData } = useApi()

defineProps({})

const faqList = ref([])

const getFaqList = () => {
  const path = 'content-manger/get-data/tb-faq/'
  const params = {
    sortBy: 'id',
    orderBy: 'asc',
  }

  getData(path, params).then((responce) => {
    console.log(responce.result)
    faqList.value = responce.result

  })
}

const groupedByCategory = computed(() => {
  const grouped = {};
  faqList.value.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
})

getFaqList()

onMounted(() => {
})

</script>

<style scoped></style>
