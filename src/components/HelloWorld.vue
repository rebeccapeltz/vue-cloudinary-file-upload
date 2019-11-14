<template>
  <div class="hello">
    <!-- supply h1 and h2 headings -->
    <h1>Upload to Cloudinary</h1>
    <h2>Using Axios</h2>

    <!-- create a form that will not submit toserver
    using the upload function as a handler-->
    <form v-on:submit.prevent="upload" enctype="multipart/form-data">
      <p>
        <label for="file-input">
          <input id="file-input" type="file" @change="handleFileChange($event)" />
        </label>
      </p>
      <button type="submit" :disabled="filesSelected <= 0">Upload</button>
    </form>

    <!-- display uploaded image if successful -->
    <p v-if="results && results.secure_url && assetType === 'image'">
      <img :src="results.secure_url" :alt="results.public_id" />
    </p>

    <!-- display errors if not successful -->
    <ul v-if="errors.length > 0">
      <!-- could add multiple attribute -->
      <li v-for="(error,index) in errors" :key="index">{{error}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      cloudName: "picturecloud7",
      preset: "bp_test_1",
      tags: "browser-upload",
      assetType: null
    };
  },
  methods: {
    // function to handle file info obtained from local
    // file system and set the file state
    handleFileChange(e) {
      console.log("handlefilechange", e.target.files);
      //returns an array of files even though multiple not used
      this.file = e.target.files[0];
      this.filesSelected = e.target.files.length;

      //clear
    },
    // function to handle form submit
    upload: function(e) {
      console.log("upload", this.file.name);
      let reader = new FileReader();

      // attach listener to be called when data from file
      // is available
      reader.addEventListener(
        "load",
        function() {
          console.log("file reader listener");
          let fd = new FormData();
          fd.append("upload_preset", this.preset);
          fd.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
          fd.append("resource_type", "auto");
          fd.append("file", reader.result);
          this.assetType = reader.result.startsWith("data:image") ? "image" : (reader.result.startsWith("data:video") ? "video" : "raw")



          let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;

          let requestObj = {
            url: cloudinaryUploadURL,
            method: "POST",
            data: fd
          };
          axios(requestObj)
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
      // clear asset type flag
      this.assetType = null
      // call for file read if there is a file
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  border: solid black 1px;
  width: 30%;
  margin: 0 auto;
  padding: 10px;
}
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
img {
  width: 10%;
  margin: 0 auto;
}
</style>

