<template>
  <div class="text-[#606060] Faq">
    <div class="px-6 pt-[30px] container">

      <h1 class="mb-4 font-bold text-3xl text-center">Frequently Asked Questions</h1>
      <div>
        <i class="fa fa-spinner fa-spin"></i>
      </div>
      <div class="mb-4 text-right">
        <div class="inline-block w-[200px]">
          <SearchInput v-model="searchPhrase" />
        </div>
      </div>
      <div>
        <transition-group name="list" tag="div">
          <draggable v-model="newGroupsArrangeArr" v-bind="dragOptions" @start="drag = true" @end="drag = false"
            item-key="id">
            <template #item="{ element }">
              <FAQCategory :title="element[0]" class="mb-3">
                <div v-for="(item, index) in element[1]" :key="index" class="mb-2">
                  <Collaps :title="item.question">
                    <div v-html="item.answer"></div>
                  </Collaps>
                </div>
              </FAQCategory>
            </template>
          </draggable>
        </transition-group>

        <!-- <div v-for="(items, category) in newGroupsArrange" :key="category">
          <FAQCategory :title="category" class="mb-3">
            <div v-for="(item, index) in items" :key="index" class="mb-2">
              <Collaps :title="item.question">
                <div v-html="item.answer"></div>
              </Collaps>
            </div>
          </FAQCategory>
        </div> -->

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
    console.log(responce.result)
    faqList.value = responce.result
    groupedByCategory()
  })
}

const newGroupsArrange = ref({})
const newGroupsArrangeArr = ref([])

const groupedByCategory = () => {
  newGroupsArrange.value = {};

  faqList.value.forEach((item) => {
    if (!newGroupsArrange.value[item.category]) {
      newGroupsArrange.value[item.category] = [];
    }
    newGroupsArrange.value[item.category].push(item);
  });

  newGroupsArrangeArr.value = Object.entries(newGroupsArrange.value)


}

getFaqList()

onMounted(() => {
})

</script>

<style scoped></style>
