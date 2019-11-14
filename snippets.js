// fetch(cloudinaryUploadURL, { method: "POST", body: fd })
          //   .then(response => {
          //     console.log('response',JSON.stringify(response))
          //     return response
          //     // if response.status !== 200 throw new Error()
          //     // return response.json()
          //   })
          //   .then(res=>{
          //     console.log('res',JSON.stringify(res))
          //     return res.json()
          //   })
          //   .then(data => {
          //     this.results = data;
          //     console.log(this.results);
          //   })
          //   .catch(error => {
          //     this.errors.push(error);
          //     console.log(this.error);
          //   });

           // axios
          //   .post(
          //     `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
          //     fd
          //   )

          async function sendData(url, formData) {
            try {
              const response = await fetch(url, {
                method: "POST",
                body: formData
              });
              return await response.json();
            } catch (error) {
              return await error;
            }
          }