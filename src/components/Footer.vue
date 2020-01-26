<template>
  <footer class="py-10 bg-primary">
    <div class="container flex justify-center mx-auto text-center">
      <p>NEW YORK, NY</p>
      <span class="mx-4">|</span>
      <a
        href="mailto:hello@craftand.com"
        class="block"
      >HELLO@CRAFTAND.COM</a>
    </div>
    <small class="block mt-4 text-center">Copyright 2020 by Craft &amp; Commerce.</small>
  </footer>
</template>

<script>
export default {

}
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>

.active {
  color: #f66;
}

</style>
