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
        <transition-group name="list" tag="div">
          <draggable v-model="newGroupsArrangeArr" v-bind="dragOptions" @start="drag = true" @end="drag = false"
            item-key="id">
            <template #item="{ element }">
              <FAQCategory :title="element" class="mb-3">
                <div v-for="(item, index) in faqList" :key="index" class="mb-2">
                  <Collaps v-if="item.category == element" :title="item.question">
                    <div v-html="item.answer"></div>
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
import { computed, onMounted, ref } from 'vue'
import { useFunctions } from '@/composables/useFunctions.js'
import { useApi } from '@/composables/useApi.js'
import FAQCategory from '@/components/FAQ/FAQCategory.vue'
import Collaps from '@/components/Collaps.vue'
import SearchInput from '@/components/SearchInput.vue'
import draggable from 'vuedraggable';
const { test } = useFunctions()
const { getData } = useApi()

const drag = ref(false);

const dragOptions = {
  animation: 200,
  ghostClass: 'ghost',
};

const faqList = ref([])
const searchPhrase = ref('')

const getFaqList = () => {
  const path = 'content-manger/get-data/tb-faq/'
  const params = {
    sortBy: 'id',
    orderBy: 'asc',
  }

  getData(path, params).then((responce) => {
    faqList.value = responce.result
    groupedByCategory()
  })
}

const newGroupsArrangeArr = ref([])

const groupedByCategory = () => {
  let myList = []

  faqList.value.forEach((item) => {
    myList.push(item.category)
  });

  newGroupsArrangeArr.value = [...new Set(myList)]

}


getFaqList()

onMounted(() => {
})

</script>

<style scoped></style>
