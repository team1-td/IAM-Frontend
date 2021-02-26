const dropArea = document.getElementById("drop-area");
var btnProcess = document.getElementById("btnProcess");
var countFiles;

init();

function init(){
  countFiles=0;
}

// main function called when loading files in the drag & drop area
const handleFiles = files => {
  btnProcess.style="display:inline";
  // declare the array of size files the number of files (syntax es6)
  const filesArray = [...files];
  countFiles += filesArray.length
  console.log(countFiles);
  if(countFiles < 10){
    // for each file in the array I perform the loading and preview functions
    //filesArray.forEach(uploadFile);
    filesArray.forEach(previewFile);
  }else{
    // print error for maximum file upload
    let formError = document.getElementById("formError");
    formError.innerHTML = "Sorry, you have reached the maximum number (maximum is 10) of images to process";
    formError.style.visibility = "visible";
  }
};

// function for loading the inserted files - TO BE SISTEMED
const uploadFile = (file, i) => {
  const url = "http://localhost:8080/upload.qualcosa";
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  xhr.open("POST", url, true);
  xhr.addEventListener(
    "readystatechange",
    function(resp) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // upload correct
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        let formError = document.getElementById("formError");
        formError.innerHTML = "Sorry, but there was an error with the upload";
        formError.style.visibility = "visible";
      }
    },
    false
    );

  formData.append("file", file);
  xhr.send(formData);
};

// function for previewing files in the div inside the drag & drop area
const previewFile = file => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = reader.result;
    div.appendChild(img);
    let label = document.createElement("p");
    label.innerHTML = "recognition";
    //label.innerHTML = file.name;
    div.appendChild(label);
    document.getElementById("gallery").appendChild(div);
  };
};

// functions activated by drag or drop event handlers
const preventDefaults = e => {
  // this method tells the user agent that if the event is not explicitly handled
  // its default action should not be taken as normal
  e.preventDefault();
  // the event continues to propagate as usual until the following function is called
  e.stopPropagation();
};

// function that highlights the edge of the drag & drop area
const highlight = e => {
  dropArea.classList.add("highlight");
};

// function with the opposite behavior of highlight
const unhighlight = e => {
  dropArea.classList.remove("highlight");
};

// function for managing the drop event
const handleDrop = e => {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
};

// handler that is activated at all drag or drop events
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
// handler for handling drag events and then calling the highlight function
["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});
// handler for the management of drop events, then calling the unhighlight function
["dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});
dropArea.addEventListener("drop", handleDrop, false);