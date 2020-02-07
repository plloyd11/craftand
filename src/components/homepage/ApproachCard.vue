<template>
  <div class="mb-8 approach-card sm:mb-0">
    <div class="max-w-md overflow-hidden">
      <div>
        <slot name="image" />
      </div>
      <div class="px-4 py-4">
        <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
          <slot name="heading" />
        </h4>
        <hr class="block w-1/12 mx-auto my-6 border-2 border-gray-800">
        <p class="text-lg text-center text-gray-800">
          <slot name="content" />
        </p>
      </div>
    </div>
  </div>
</template>
