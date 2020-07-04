<template>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <span class="dropdown-item" v-for="(lang, index) in langs" :key="index" @click="setLang" :data-lang="index">{{ lang }}</span>
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
        setLang: function(event) {
            this.$root.$i18n.locale = event.target.dataset['lang']
        }    
    }
    
}
</script>

<style>
    span:hover {
        cursor: pointer;
    }
</style>
