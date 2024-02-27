<template>
    <section id="formSection">
        <form>
            <label for="videoInp" class="fileInput">
                <span class="browseButton">Browse video files</span>
                <input id="videoInp" type="file" accept=".mkv,.mp4" @change="getFileName($event, 'videoFile')">
                <span id="videoName">{{ videoFile}}</span>
            </label>

            <label for="subsInp" class="fileInput">
                <span class="browseButton">Browse sub files</span>
                <input id="subsInp" type="file" accept=".vtt" @change="getFileName($event, 'subsFile')">
                <span id="subsName">{{ subsFile }}</span>
            </label>

            <input type="submit" value="Start hardcoding">
        </form>
    </section>
</template>

<script>

export default {
    data() {
        return {
            videoFile: 'No video file selected',
            subsFile: 'No subtitle file selected'
        };
    },
    methods: {
        getFileName(event, fileNameType) {
            const inp = event.target;
            const fileName = inp.files.length > 0 ? inp.files[0].name : `No ${fileNameType === 'videoFileName' ? 'video' : 'subtitle'} file selected`;
            this[fileNameType] = fileName;
        }
    }
}

</script>