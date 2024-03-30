function run() {
   let htmlCode = document.getElementById("html-code").value;
   let cssCode = document.getElementById("css-code").value;
   let jsCode = document.getElementById("js-code").value;
   let outputCode = document.getElementById("output").contentDocument;

   outputCode.body.innerHTML = htmlCode;
   let style = outputCode.createElement("style");
   style.innerHTML = cssCode;
   outputCode.head.appendChild(style);

   try {
       outputCode.body.appendChild(outputCode.createElement("script")).text = jsCode;
   } catch (e) {
       console.error(e);
   }