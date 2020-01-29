<template>
  <div>
    <div
      v-for="edge in $page.allEmployees.edges"
      :key="edge.node.id"
      class="flex items-center team-card"
    >
      <div>
        <g-image
          src="~/img/team/mark.png"
          class="max-w-sm rounded-full"
        />
      </div>
      <div class="pl-12">
        <h2 class="text-3xl font-extrabold">
          {{ edge.node.name }}
        </h2>
        <p class="uppercase din">
          {{ edge.node.title }}
        </p>
        <p class="max-w-md mt-8">
          {{ edge.node.shortBio }}
          <a
            href="#modal"
            class="px-1 py-0 text-sm font-extrabold bg-primary-color"
          >+</a>
        </p>
      </div>
    </div>
  </div>
</template>

<page-query>
  query {
    allEmployees {
      edges {
        node {
          employees {
            id
            photo
            name
            title
            shortBio
            fullBio
          }
        }
      }
    }
  }
</page-query>

<script>
export default {

}
</script>

<style>

</style>
