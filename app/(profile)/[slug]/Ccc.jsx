import React from 'react'


const fileInput = document.getElementById("fileInput");

fileInput?.addEventListener("change", e => {
  const files = fileInput.files;
  
    const file = files[0];
    const reader = new FileReader();
    reader.addEventListener('load', ()=> {
      const resa = reader.result
      console.log(resa);
    })
    reader.readAsDataURL(file);
  
})
export default function Ccc() {
  return (
    <div>
        

      <input type="file" name="file" id="fileInput" />

    </div>
  )
}
