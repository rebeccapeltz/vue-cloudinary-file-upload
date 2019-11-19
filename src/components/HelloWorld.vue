<template>
  <div class="hello">
    <!-- supply h1 and h2 headings -->
    <h2>Upload an Image to Cloudinary</h2>
    <!-- create a form that will not submit to a server but will prevent submit and
    use the upload function as a handle-->
    <form v-on:submit.prevent="upload">
          
      <!-- allow the user to select an image file and when they have selected it call a funtion to handle this event -->
      <label for="cloudname-input">Cloud Name:</label> 
      <input id="cloudname-input" v-model="cloudName" placeholder="cloud_name" />
  
      <!-- allow the user to select an image file and when they have selected it call a funtion to handle this event -->
      <label for="preset-input">Preset:</label>
      <input id="preset-input" v-model="preset" placeholder="preset" />
     
      <!-- allow the user to select an image file and when they have selected it call a funtion to handle this event -->
      <label for="file-input">Upload:</label>
      <input
        id="file-input"
        type="file"
        accept="image/png, image/jpeg"
        @change="handleFileChange($event)"
      />

      <!-- sumbit button is disabled until a file is selected -->
      <button type="submit" :disabled="filesSelected < 1">Upload</button>
  
    </form>

    <!-- display uploaded image if successful -->
    <section v-if="results && results.secure_url">
      <img :src="results.secure_url" :alt="results.public_id" />
    </section>

    <!-- display errors if not successful -->
    <section>
    <ul v-if="errors.length > 0">
      <li v-for="(error,index) in errors" :key="index">{{error}}</li>
    </ul>
    </section>

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
      cloudName: "",
      preset: "",
      tags: "browser-upload"
    };
  },
  methods: {
    // function to handle file info obtained from local
    // file system and set the file state
    handleFileChange: function(event) {
      console.log("handlefilechange", event.target.files);
      //returns an array of files even though multiple not used
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
    },
    // function to handle form submit
    upload: function(event) {
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
          fd.append("file", reader.result);

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
  display: grid;
  padding: 1em;
  background: #f9f9f9;
  border: 1px solid #c1c1c1;
  margin: 2rem auto 0 auto;
  max-width: 600px;
  padding: 1em;
}
form input {
  background: #fff;
  border: 1px solid #9c9c9c;
}
form button {
  background-color: blue;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 0.7em;
  width: 100%;
  border: 0;
}
form button:hover {
  background: gold;
  color: black;
}

label {
  padding: 0.5em 0.5em 0.5em 0;
}

input {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
input:focus {
  outline: 3px solid gold;
}

@media (min-width: 400px) {
  form {
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;
  }

  label {
    text-align: right;
    grid-column: 1 / 2;
  }

  input,
  button {
    grid-column: 2 / 3;
  }
}

button {
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
}
form button:disabled,
form button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
section {
  margin: 10px 0;
}
</style>

