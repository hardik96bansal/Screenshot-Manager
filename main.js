document.getElementById("download").addEventListener("click", function () {
   var imgElem = document.getElementById("hidden").getAttribute('href');
   var folder = document.getElementById("folder").value;
   chrome.downloads.download({
      url: imgElem,
      filename: folder + "/Screenshot.jpeg",
      saveAs: false
   });

});

chrome.tabs.captureVisibleTab(null, function (img) {
   var a = document.createElement("img");
   var link = document.createElement('a');
   link.id = 'hidden';
   link.href = img;
   document.body.appendChild(link);
   document.getElementById("hidden").style.display = "none";
});

