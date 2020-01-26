<template>
  <header class="py-12 shadow-md bg-main-gray">
    <div class="container flex items-center justify-between mx-auto">
      <div>
        <g-link
          exact
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="275"
            viewBox="0 0 275 24"
          >
            <image
              id="Craft_Commerce_TextHeader"
              data-name="Craft&amp;Commerce_TextHeader"
              width="275"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
        </g-link>
      </div>

      <nav class="items-center hidden lg:flex">
        <g-link
          class="mr-8 text-white uppercase din hover:underline"
          to="/about/"
        >
          About
        </g-link>
        <g-link
          class="mr-8 text-white uppercase din hover:underline"
          to="/services/"
        >
          Services
        </g-link>
        <g-link
          class="mr-8 text-white uppercase din hover:underline"
          to="/our-work/"
        >
          Our Work
        </g-link>
        <g-link
          class="text-white uppercase din hover:underline"
          to="/careers/"
        >
          Careers
        </g-link>
        <div class="md:ml-24 lg:ml-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <image
              id="Contact_Us_Icon"
              data-name="Contact Us Icon"
              width="64"
              height="64"
              xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAHkUlEQVR4nO2ce4xU1R2Av70sB9jlArvCApUQwxUCilqNGjUVrDEVYxupYvsHPhDTWh+xpCpgVEKXhwgEMNXsCgoqralG+ANfYCJQ6wNjtWnVtIIX3+wA6gKXXZa7D5rfeAZn58xOZ5h77+zs7Pff3nN37jnf/O6Zc3/3nFNGxPiubQEOcDowFhgN/AioBvoDNiD1OgS0AI1AA/A58AnwEbBLOV5HlDWPRJTv2iLiKuAK4GJgiHFSbojEvwObgU3K8b4Iuw2hifJduxK4FpgJ/CTkL2UH8ATwrHI8zygNgMAr77t2DTALuDWAyMkVibTVwArleA1BfnBgonzXHgTMBe4EKo0TokX6tjpggXK8xiCuHIgo37VvAJYBNUZhYflGf3lrleMdy6cmeYnSnfRa4HKjsHuxHbhBOd6XJ1oryziSvaQrgX8XgSThEqmr79q/NEqyJOeI8l1b/ud+4I9RDS8CZrHUP9dbMaeG+q7dF1gD3GgUFhfPAdcrx/MDF+W7tgKeB35hFBYnW4CrleM1ByZKR9KGHiQpwavSpmwi6/925rpPWtMDJQk/A/6s25iRbH71pOMu9j4pE9fqDj4jGU3qIcALRfrrlivTlONt6Op/uhTgu/bJepwk6Y9SQJ4Tz1KO91m6tma69daWkCRBnlWf7qq/SivKd+0bdUdXakiu7JZ0bTbs6SzArm74gBsVkm0Yqxzv2+TrpYuoe0tYklAFPJB6sFNE+a49UkdTofNJhaYVODU5xZwaUd0h6dYdkCeRu5LrcTyidI77qwKkb7srTcAo5XgHSImoX/dK6oQEznWJA8miZhin9nLcSfzW06PwL9MNF3qJd+puufYwNSxJz740iNfeDvf34aJzjjDj6gPG8YCQ9PHyhKjQ8t5XXeax7Z1K/vFBf6MsCCaOO8q0KYfCqj767fZyS88FmGQU58nXe8tZXD8U1fcYq+6Lce4ZLYG3QD6zvraBygEdrFxXzSefK+OcALhQEpci6VRgcNCf3tRssXGLzbyHhx2XdfG5WWVds0IkyWfKZz+wahh/2TSYg166B428GQCcLZ88MYxPT7D59YHMXVZDnz6wdM4+Jp2Xv6xkSfJFyDVC5kxLT70Jla07Kpmz9PvHx4dm5ydLojJiScJES89PCp3X363oJOvSC5pyvqQIlqiU6JyzbHhUkoQxlp7EFQki6+4lNbS3w5J79jFl0uGsLyuSRLAgwrftqDDOCZGTragfW958r4JZi0bgt5ZR+/v9WcmS6EuWJMIjpsYqRLZAxlTZypIyiT6JwrseHF4ISYJdEFEkyWprL6N21n6uudycKCeSRGR7R1n83LfeH2CcExHloQw8siW2vw8tR8uwymDuLd90kpWQZFnQ2lpG48GCVjWePQhuFJgDo0a0snphjEEDO+K3U9MRKy5r5rQD3HTNgbgkuTW3vl1JxYAO6hfEcEZnPaciaNosnaCKFGnwmkUN1JzUxpMbh/CHxcO5ff6IuKzbpjdy+3WNNLdY/G7eSGYvreFP66upGtReSFmHLf3WITKkodLgYdXt1D1TxSPrq+KX/mhXP35730i+ivVlz77yuLgPd/aLlz21cXAnWePHRC4rJtmDmHE4JBKSpMHScBGQzM7PFFNvHZX24nJuWxvMmvEd9Qsa4iJFbkQ0SESFPpldmOAczSgpG+TBd8ljQ+PZgkfnxzh97NGoRO0WUTuNwwEjDaqrjTHEbmfFuhOTlGDDFruTrDPGRSLrP5ZeWxIaIkkaJA2TBj6zKf+MTkJWRf8O6mobQsl1pfCepV94mqO9PCkvP8ZZ41s6SZIGBsWGlFzX+WceQam8ppJ3hYTsB4mXCy/rlGfgdHTAktVD40m8MEgemIbEduV4P03kzDeHJeql7QP58ON+jDslnJ/03V8oXthqx3PzISFujr+uGq3Xw/ViMkE53n/jAasnI7xjnNLLv0QSKW+K15a8FpMnE0eSRf01jF+/IuaITFU0RCnHO6Tnk/fyPU8px/su8UfqRDLJn7t6EXQpk3kimXK8PUB9b0TxROqCbmNihu/a1XrZfJXx76WBdEHjlOPtTW6tMZ7V9+XcEpUkzEuVRDpRGunU/2Yc7fnIWPKRdK00br0EvmufIgMuPaO/FJCU+DnK8dKmnbqKKPSakJuNgp7LbV1JyihKy5IVn0uNgp7Hw8rxns7UqoyiNNKxd7k8qwfwYuqc8nR02Uclo9cTvyLTAIzC4mYb8PNs1hVnle7Sa25lqexWo7B4yVpS1qK0rGad3NtoFBYfL+YiKSdR/BBZsgZ3uVFYPKyU6eK5SCKfueW+a/8KeFzvIFYMyDhppnK8506krvluYjNG0hF6I63uzBta0q4TrWNe7y6U4+0GJgN3AAeNEwrPYV23yflIIuCNtoYB84Hf6PVuhaRVb7S1UDne/iDqEcbWbfJGZzZwExD1PMImnb5dphzvU6M0D8LcDFDyWtP1ZoA/Nk4Ilve1oHU6pR04UW0vOV5vLzkFuCCAVHOzTonIjj3PyzIx44yAKcSGpfI4dLaOstP05qUyKWooIDPsRWK7liG3kkx0k0yGyJAOWaLnn8rx2iKrNPA/6QN93uYn+80AAAAASUVORK5CYII="
            />
          </svg>
        </div>
      </nav>
    </div>
  </header>
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

<style scoped>

.active {
  color: #fadd0d;
}

</style>
