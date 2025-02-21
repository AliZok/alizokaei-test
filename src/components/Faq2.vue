<template>
  <div class="text-[#606060] Faq">
    <div class="px-2 md:px-6 pt-2 text-center">
      <div class="inline-block relative text-brand">
        <h1 class="mb-6 font-bold text-xl md:text-2xl text-center">Frequently Asked Questions</h1>
        <i v-if="isWatingData" class="top-[9px] left-[-25px] absolute scale-125 fa fa-spinner fa-spin"></i>
      </div>
      <div class="mb-4 text-right">
        <div class="inline-block w-[200px]">
          <SearchInput v-model="searchPhrase" />
        </div>
      </div>
      <div>
        <transition-group name="list" tag="div">
          <draggable v-model="newGroupsArrangeArr" v-bind="dragOptions" @start="drag = true" @end="drag = false"
            class="">
            <template #item="{ element }">
              <FAQCategory :title="removeNumber(element.category)" :subtitle="removeNumber(element.subcategory)"
                class="mb-3">
                <div v-for="(item, index) in faqList" :key="index" class="mb-2 ">
                  <Collaps v-if="item.category == element.category" :title="item.question">
                    <div v-html="item.answer" class="md:text-md text-sm"></div>
                  </Collaps>
                </div>
              </FAQCategory>
            </template>
          </draggable>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted, ref, watch } from 'vue'
import { useFunctions } from '@/composables/useFunctions.js'
import { useApi } from '@/composables/useApi.js'
import FAQCategory from '@/components/FAQ/FAQCategory.vue'
import Collaps from '@/components/Collaps.vue'
import SearchInput from '@/components/SearchInput.vue'
import draggable from 'vuedraggable';
const { test } = useFunctions()
const { getData } = useApi()

const drag = ref(false);
const isWatingData = ref(true)
const dragOptions = {
  animation: 200,
  ghostClass: 'ghost',
};

const faqList = ref([])
const searchPhrase = ref('')

const getFaqList = () => {
  isWatingData.value = true
  const path = 'content-manger/get-data/tb-faq/'
  const params = {
    sortBy: 'id',
    orderBy: 'asc',
  }

  getData(path, params).then((responce) => {
    faqList.value = responce.result
    pureList.value = faqList.value
    groupedByCategory()
  })
}

const removeNumber = (title) => {
  return title.split(' ')[1]
}

const newGroupsArrangeArr = ref([])

const groupedByCategory = () => {
  let myList = []

  faqList.value.forEach((item) => {
    let newObj = {
      category: item.category,
      subcategory: item.subcategory,
    }
    myList.push(newObj)
  });

  newGroupsArrangeArr.value = Array.from(
    new Set(myList.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item));

  isWatingData.value = false
}


getFaqList()

const debouncedSearch = ref('');
const debounceTimeout = ref(null);

watch(searchPhrase, (newValue) => {
  // if (newValue.length > 2) {
  if (debounceTimeout.value) {
    clearTimeout(debounceTimeout.value);
  }

  debounceTimeout.value = setTimeout(() => {
    debouncedSearch.value = newValue;
  }, 800);
  // }
});

const isSeraching = ref(false)
const pureList = ref([])

watch(debouncedSearch, (newValue) => {
  search(newValue)
})

const search = (inputPhrase) => {
  if (inputPhrase) {
    const lowerInputPhrase = inputPhrase.toLowerCase()
    faqList.value = faqList.value.filter(item => {
      return (
        item.question.toLowerCase().includes(lowerInputPhrase) ||
        item.category.toLowerCase().includes(lowerInputPhrase) ||
        item.subcategory.toLowerCase().includes(lowerInputPhrase) ||
        item.answer.toLowerCase().includes(lowerInputPhrase)
      );
    })
    groupedByCategory()
  } else {
    faqList.value = pureList.value
    groupedByCategory()
  }

}

onMounted(() => {
})

</script>

<style scoped></style>
