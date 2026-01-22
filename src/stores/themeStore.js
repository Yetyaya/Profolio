import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref(localStorage.getItem('theme') || 'theme1')

  const setTheme = (theme) => {
    currentTheme.value = theme
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'theme1' ? 'theme2' : 'theme1'
    localStorage.setItem('theme', currentTheme.value)
  }

  return { currentTheme, setTheme, toggleTheme }
})
