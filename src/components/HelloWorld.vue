<template>
  <div class="hello">
    <h1>Upload to Cloudianry</h1>
    <h3>Using Axios</h3>
    <form v-on:submit.prevent="upload">

      <p>
        <label for="file-input">
          <input id="file-input" type="file" multiple @change="handleFileChange($event)" />
        </label>
      </p>
      <button type="submit" v-show="filesSelected > 0">Upload</button>
    </form>
    <p v-if="results && results.secure_url">
      <img :src="results.secure_url" :alt="results.public_id" />
    </p>
  </div>
</template>

<script>
import axios from "axios";
import FileSelect from "./FileSelect.vue";
export default {
  name: "HelloWorld",
  components: {
    FileSelect
  },
  data() {
    return {
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      cloudName: "picturecloud7",
      preset: "bp_test_1",
      tags: "browser-upload"
    };
  },
  methods: {
    handleFileChange(evt) {
      this.file = evt.target.files[0];
      this.filesSelected = evt.target.files.length;
    },
    upload: function(e) {
      console.log(this.file.name);
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          // this.showPreview = true;
          // this.imagePreview = reader.result;
          let fd = new FormData();
          fd.append("upload_preset", this.preset);
          fd.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
          fd.append("file", reader.result);
          axios
            .post(
              `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
              fd
            )
            .then(response => {
              this.results = response.data;
              console.log(this.results);
            })
            .catch(error => {
              this.errors.push(error);
              console.log(this.error);
            });
        }.bind(this),
        false
      );

      if (this.file) {
        /*
        Ensure the file is an image file.
      */
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          /*
          Fire the readAsDataURL method which will read the file in and
          upon completion fire a 'load' event which we will listen to and
          display the image in the preview.
        */
          reader.readAsDataURL(this.file);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

// https://alligator.io/vuejs/file-select-component/