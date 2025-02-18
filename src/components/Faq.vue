<template>
  <div class="Faq text-gray-700">
    <div class="container px-6 pt-[30px]">
      <h1 class=" text-center mb-4 font-bold text-2xl">Frequently Asked Questions</h1>
      <div>
        <!-- <i class="fa fa-spinner fa-spin"></i> -->


      </div>
      <div class="mb-4 text-right">
        <div class="w-[200px] inline-block">
          <SearchInput v-model="searchPhrase" />
        </div>
      </div>
      <div>
        <div v-for="(items, category) in groupedByCategory" :key="category">
          <FAQCategory :title="category" class="mb-3">
            <div v-for="(item, index) in items" :key="index" class="mb-2">
              <Collaps :title="item.question">
                <div v-html="item.answer"></div>
              </Collaps>
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
import Collaps from '@/components/Collaps.vue'
import SearchInput from '@/components/SearchInput.vue'

const { test } = useFunctions()
const { getData } = useApi()
const faqList = ref([])
const searchPhrase = ref('')

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
