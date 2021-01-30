<template>
  <div>
    <v-menu transition="slide-x-transition" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span class="language-text">Language</span>
        <v-btn icon v-on="on" v-bind="attrs">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in langs"
            :key="index"
            @click="setLang(index)"
            class="cursor-pointer"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: 'LanguageSwitcher',
    data() {
        return {
            langs: {
                ru: 'RU',
                en: 'EN',
                de: 'DE'
            }
        }    
    },

    methods: {
        setLang: function(lang) {
            this.$root.$i18n.locale = lang
        }    
    }
    
}
</script>

<style lang="scss">
  .language-text {
    font-size: 1rem;
  }
</style>
