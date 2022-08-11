var image = ""

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    
    reader.onload = () => {
      image = reader.result
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}


  function saveText(text, filename){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
  }

    let Create = [];
   
    const addMovie = (ev)=>{
      localStorage.clear() // clear all 

       ev.preventDefault();  //to stop the form submitting
        let create = {
            image : image,
            artNetwork : document.getElementById('art').value,
            link : document.getElementById('link').value,
            desc : document.getElementById('desc').value,
            Music : document.getElementById('Music').value,
            Domain_Names : document.getElementById('Domain Names').value,
            Photography : document.getElementById('Photography').value,
            Sports : document.getElementById('Sports').value,
            Trading_Cards : document.getElementById('Trading Cards').value,
            Utility : document.getElementById('Utility').value,
            Virtual_World : document.getElementById('Virtual World').value,
            Events : document.getElementById('Events').value,
            Art : document.getElementById('Art').value,
            BlockchainPlatforms : document.getElementById('BlockchainPlatforms').value,
            supply : document.getElementById('supply').value,
        }
        Create.push(create);

        //saving to localStorage
        localStorage.setItem('payment_create', JSON.stringify(Create) );
        var getAll = localStorage.getItem("payment_create");

        saveText( getAll, "payment_create.json" );
        location.href = "TokenDetails.html"
    }
    document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('btn').addEventListener('click', addMovie);

});

  