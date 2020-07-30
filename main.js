document.getElementById("download").addEventListener("click", function () {
   var imgElem = document.getElementById("hidden").getAttribute('href');
   var folder = document.getElementById("folder").value;
   var fName = 'Screenshot.jpeg';
   if(folder!='' && folder!=undefined) fName = folder+'/'+fName;
   chrome.downloads.download({
      url: imgElem,
      filename: fName,
      saveAs: false
   });
   setInterval(()=>window.close(), 500);
});

chrome.tabs.captureVisibleTab(null, function (img) {
   var a = document.createElement("img");
   var link = document.createElement('a');
   link.id = 'hidden';
   link.href = img;
   document.body.appendChild(link);
   document.getElementById("hidden").style.display = "none";

   var image = document.getElementById("screenshot");
   image.setAttribute('src',img);
});

