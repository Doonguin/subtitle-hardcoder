<template>
  <main>
    <TitleSection />
    <UploadForm />
  </main>
  <NotifsBar />
</template>

<script>
import UploadForm from './components/UploadForm.vue'
import TitleSection from './components/TitleSection.vue'
import NotifsBar from './components/NotifsBar.vue';

export default {
  name: 'App',
  components: {
    UploadForm,
    TitleSection,
    NotifsBar
  }
}
</script>
