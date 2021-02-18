const dropArea = document.getElementById("drop-area");
var btnProcess = document.getElementById("process");

// funzione principale richiamata quando si caricano file nell'area drag&drop
const handleFiles = files => {
btnProcess.style="display:inline";
  // dichiaro l'array dei file di dimensione il numero di files (sintassi es6)
  const filesArray = [...files];
  // per ogni file dell'array eseguo le funzioni di caricamento e anteprima
  filesArray.forEach(uploadFile);
  filesArray.forEach(previewFile);
};

// funzione per il caricamento dei file inseriti - DA SISTEMARE
const uploadFile = (file, i) => {
  const url = "http://localhost:8080/upload.qualcosa";
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  xhr.open("POST", url, true);
  xhr.addEventListener(
    "readystatechange",
    function(resp) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Upload correct
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

// funzione per l'anteprima dei file nel div interno all'area drag&drop
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

// funzioni attivate dagli handler di eventi di drag o drop 
const preventDefaults = e => {
  // questo metodo dice all'user agent che se l'evento non viene esplicitamente gestito
  // la sua azione predefinita non dovrebbe essere presa come normale
  e.preventDefault();
  // l'evento continua a propagarsi come al solito finchè non viene richiamata la funzione seguente
  e.stopPropagation();
};

// funzione che evidenzia il bordo dell'area di drag&drop
const highlight = e => {
  dropArea.classList.add("highlight");
};

// funzione con un comportamento opposto a highlight
const unhighlight = e => {
  dropArea.classList.remove("highlight");
};

// funzione per la gestione dell'evento di drop
const handleDrop = e => {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
};

// handler che si attiva ad tutti gli eventi di drag o di drop
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
// handler per la gestione degli eventi di drag richiamado poi la funzione highlight
["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});
// handler per la gestione degli eventi di drop richiamando poi la funzione unhighlight
["dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});
dropArea.addEventListener("drop", handleDrop, false);