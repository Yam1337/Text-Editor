async function fetchData() {
  await fetch("files.JSON")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
let fileReader = new FileReader();
let content = document.getElementById("content");
let closeWindow = () => {
  content.style.display = "none";
  saveWindow.style.display = "none";
  error.style.display = "none";
  typeInput.innerHTML = "";
  saveInput.value = "";
  fileName.innerHTML = "New";
};
let reset = () => {
  saveWindow.style.display = "none";
  error.style.display = "none";
  typeInput.innerHTML = "";
  saveInput.value = "";
  fileName.innerHTML = "New";
  fileReader.value = "";
};
let saveWindow = document.getElementById("saveWindow");
let saveInput = document.getElementById("saveInput");
let typeInput = document.getElementById("typeInput");
let fileName = document.getElementById("fileName");
let closeSaveWindow = () => {
  saveWindow.style.display = "none";
  error.style.display = "none";
  saveInput.value = "";
};
let save = document.getElementById("saveWindow");
let saveAs = () => {
  save.style.display = "flex";
};
let makeItBold = () => {
  document.execCommand("bold");
};
let makeItItalic = () => {
  document.execCommand("italic");
};
let makeItList = () => {
  document.execCommand("insertunorderedlist");
};
let download = (fileName, content) => {
  const a = document.createElement("a");
  a.setAttribute("download", fileName);
  a.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(content)
  );

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
};
let error = document.getElementById("error");
let saveFile = () => {
  let fileName = saveInput.value;
  let fileContent = typeInput.innerHTML;
  if (fileName.length >= 3) {
    console.log(fileName, fileContent);
    const content = JSON.stringify({
      name: fileName,
      content: fileContent,
    });
    download(`${fileName}.JSON`, content);
    saveWindow.style.display = "none";
    error.style.display = "none";
    saveInput.value = "";
  } else {
    error.style.display = "flex";
  }
};
let openEditor = () => {
  content.style.display = "flex";
};
upload.addEventListener("change", () => {
  fileReader.readAsText(upload.files[0]);
  fileReader.onload = () => {
    let myFile = JSON.parse(fileReader.result);
    typeInput.innerHTML = myFile.content;
    fileName.innerHTML = myFile.name;
  };
});
