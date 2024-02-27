<template>
  <main>
    <TitleSection />
    <UploadForm />
  </main>
</template>

<script>
import UploadForm from './components/UploadForm.vue'
import TitleSection from './components/TitleSection.vue'

export default {
  name: 'App',
  components: {
    UploadForm,
    TitleSection
  }
}
</script>
