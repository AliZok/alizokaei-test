<template>
    <div>
      <!-- Wrap the draggable component with a transition group -->
      <transition-group name="list" tag="ul">
        <draggable
          v-model="items"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <li class="list-item">
              {{ element.name }}
            </li>
          </template>
        </draggable>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import draggable from 'vuedraggable';
  
  // Sample data
  const items = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ]);
  
  // Draggable options
  const dragOptions = {
    animation: 200,
    ghostClass: 'ghost',
  };
  
  // Drag state
  const drag = ref(false);
  </script>
  
  <style>
  /* Transition styles */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  
  /* Draggable ghost class */
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  
  /* List item styles */
  .list-item {
    padding: 10px;
    margin: 5px 0;
    background: #f0f0f0;
    border: 1px solid #ddd;
    cursor: move;
  }
  </style>