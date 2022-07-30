
function takeshot() {
  let div = document.getElementById("wrapper");
  //   console.log(div);
  let result = document.getElementById("photo");
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
//   result.addEventListener("click", () => (location.href = "#result"));

  
    
}
