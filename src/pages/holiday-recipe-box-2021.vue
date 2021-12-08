<template>
  <Layout>
    <!-- Hero -->
    <section class="mt-12 lg:mt-20 hero">
      <div class="px-6 mx-auto max-w-7xl">
        <h1
          class="mb-8 text-3xl font-extrabold leading-none text-center lg:text-5xl proxima"
        >
          <span class="text-strike">C&amp;C's Holiday Recipe Box</span>
        </h1>
        <p
          class="max-w-screen-md mx-auto mb-6 text-lg leading-normal text-center lg:text-xl"
        >
          Below we've gathered the C&C team's favorite recipes of 2021. Each
          links to an online recipe that can be easily saved on the recipe
          management tool of your choice. Enjoy!
        </p>
      </div>
    </section>
    <section class="my-6 md:my-12">
      <div
        class="grid gap-6 px-6 mx-auto sm:grid-cols-2 md:grid-cols-1 md:space-y-10 md:gap-0 max-w-7xl"
      >
        <div
          v-for="(recipe, index) in recipes"
          :key="recipe.title"
          class="bg-gray-100 shadow-sm md:grid md:grid-cols-12"
        >
          <div
            :class="index % 2 === 0 ? 'order-1' : 'order-2'"
            class="col-span-4"
          >
            <img
              :src="recipe.img"
              :alt="recipe.title"
              class="object-cover object-center w-full h-full"
            />
          </div>
          <div
            :class="index % 2 === 0 ? 'order-2' : 'order-1'"
            class="col-span-8 p-4 space-y-4 md:p-12 md:space-y-8"
          >
            <h4
              class="text-2xl font-extrabold leading-tight sm:leading-none md:text-4xl proxima"
            >
              {{ recipe.title }}
            </h4>
            <hr class="w-12 border-b-8 border-primary-color" />
            <p
              class="font-semibold leading-tight uppercase sm:leading-none proxima"
            >
              Inspired by {{ recipe.owner }}
            </p>
            <p>{{ recipe.description }}</p>
            <a
              :href="recipe.url"
              target="_blank"
              rel="noopener"
              class="inline-block px-1 py-1 text-sm leading-none uppercase bg-primary-color din"
              >Link to full recipe</a
            >
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    name: '2021 Recipes Collection',
    title: '2021 Recipes Collection',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          "we've gathered the C&C team's favorite recipes of 2021. Each links to an online recipe that can be easily saved on the recipe management tool of your choice. Enjoy!"
      }
    ]
  },
  data() {
    return {
      recipes: [
        {
          title: 'The Chilton (Vegan)',
          owner: 'Mark',
          description:
            'This was my response to an overabundance of "ranch water" this summer, and has remained surprisingly resilient. In my simple version, I fill a mason jar with ice, sprinkle in a little salt, add Tito\'s and Topo Chico, and the juice of 1/2 a fresh-squeezed lemon. I then put the top on the mason jar, shake thoroughly, and it\'s ready to serve.',
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772889/clients/craft/holiday-2021/chilton_csdi2r.png',
          url: 'https://www.texasmonthly.com/food/the-chilton-recipe/'
        },
        {
          title: 'Carnitas Tacos',
          owner: 'Jordan',
          description:
            'I love tacos and missed them during the pandemic. So I would make them myself. I source a pork butt/shoulder from a local farm and stew it up. It also makes great leftovers, like Chipotle bowls.',
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772890/clients/craft/holiday-2021/tacos_lj54mp.png',
          url:
            'https://craftcommerce.box.com/s/7bb8ocyc33tfvvy3sm0boc1htsgwhftb'
        },
        {
          title: 'Easy Homemade Cranberry Sauce (Vegan)',
          owner: 'Jake',
          description: 'Easy and delicious. I make it every holiday!',
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772889/clients/craft/holiday-2021/cranberry_sauce_vg3mbf.png',
          url:
            'https://www.thekitchn.com/recipe-very-basic-cranberry-sauce-14886'
        },
        {
          title: "Za'atar & Harissa Roasted Chickpeas (Vegan)",
          owner: 'Karen',
          description:
            "Staying at home has meant finding new ways to eat healthy without getting bored. Za'atar & Harissa Roasted Chickpeas became a house favorite to keep flavors and textures exciting, and now we add them to everything—on a salad, as a snack, with salmon or lamb—just pick your favorite (or new) spices and enjoy this easy, crunchy, high-protein side!",
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772890/clients/craft/holiday-2021/zaatar_chickpeas_e2iqz3.png',
          url:
            'https://www.thekitchn.com/how-to-make-crispy-roasted-chickpeas-in-the-oven-cooking-lessons-from-the-kitchn-219753'
        },
        {
          title: 'Chili Paneer or Tofu (Vegetarian or Vegan)',
          owner: 'Nidhi',
          description:
            "Growing up, the largest cabinet in our kitchen was full of my mom's spices. Front and center. From chili powder to garam masala to turmeric - I was always in awe of all the different colors and smells as my mom would whip up my favorite meals. I still can\t cook Indian food like my mother but I can make chili paneer/tofu. I use my favorite seasonings and am instantly reminded of my mom's spice cabinet.",
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772889/clients/craft/holiday-2021/chili_paneer_t8wdrc.png',
          url: 'https://www.spiceindiaonline.com/chilli-paneer/'
        },
        {
          title: 'Garlic Noodles',
          owner: 'Kristin',
          description:
            'Craving a favorite garlic noodle dish from a pier-side Japanese restaurant in San Francisco during the pandemic led me to recreate them in the safety of my home. Made from simple ingredients common to my pantry, it’s a quick something to cook up without needing to travel to the store.',
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772890/clients/craft/holiday-2021/garlic_noodles_bgzugu.png',
          url: 'https://www.budgetbytes.com/garlic-noodles/'
        },
        {
          title: 'Slow Cooker Spinach-Artichoke Chicken Stew',
          owner: 'Carli',
          description:
            'We LOVE simple, hearty slow-cooker meals to feed our busy family! This dish is delicious and comforting without feeling too heavy or rich. Plus, the slow-cook method allows me to dump everything together during lunch and have a one-dish meal ready to go after work and school!',
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772889/clients/craft/holiday-2021/artichoke_soup_dcypsq.png',
          url:
            'https://cooking.nytimes.com/recipes/1021793-slow-cooker-spinach-artichoke-chicken-stew'
        },
        {
          title: 'Mango Tapioca Pudding (Vegan)',
          owner: 'Samantha',
          description:
            'This recipe is very sentimental to me and is always a dessert everyone looks forward to at family get-togethers! I love mango tapioca pudding because it’s such a refreshing and creamy dessert that’s perfect to share with friends and family. You can easily adjust your dessert by adding your own choices of toppings and fruits. My personal favorite is adding a scoop of vanilla ice cream to my pudding!',
          img:
            'https://res.cloudinary.com/observatory-agency/image/upload/v1637772889/clients/craft/holiday-2021/mango_sago_j9ptmx.png',
          url: 'https://nomnompaleo.com/mango-sago-coconut-tapioca-pudding'
        }
      ]
    }
  }
}
</script>
