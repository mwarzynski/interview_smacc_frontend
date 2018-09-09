<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h2>
          <blockquote>
            &#8220;Work hard, be kind, and amazing things will happen.&#8221;
            <footer>
              <small>
                <em>&mdash;Conan O'Brien</em>
              </small>
            </footer>
          </blockquote>
        </h2>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Motto',
  props: {
    msg: String
  }
}
</script>
