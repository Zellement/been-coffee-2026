import withNuxt from './.nuxt/eslint.config.mjs'
import vue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt({
    // Only include necessary plugins
    plugins: { vue },
    rules: {
        // Vue 3 recommended rules
        ...vue.configs['flat/recommended'].rules,
        // Disable any ESLint rules that conflict with Prettier (This is correct)
        ...eslintConfigPrettier.rules,
        'no-undef': 'off',
        'vue/custom-event-name-casing': ['error', 'camelCase', { ignores: [] }]
    },
    ignores: ['node_modules/']
})
