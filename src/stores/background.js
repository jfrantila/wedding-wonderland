import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBackgroundImage = defineStore('background', () => {
  const backgroundImg = ref(false)

  function changeBackgroundImageToBeige() {
    backgroundImg.value = false
  }

  function changeBackgroundImageToImage() {
    backgroundImg.value = true
  }

  return { backgroundImg, changeBackgroundImageToBeige, changeBackgroundImageToImage}
})
