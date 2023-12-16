function makeTextBigger() {
   document.getElementById("text").style.fontSize = "24pt";
   alert("Hello, world!");
}

function makeFancyShmancy() {
   let text = document.getElementById("text");
   if (document.getElementById("fancyShmancy").checked) {
      text.style.fontWeight = "bold";
      text.style.color = "blue";
      text.style.textDecoration = "underline";
      alert("FancyShmancy!");
   } else {
      text.style.fontWeight = "normal";
      text.style.color = "black";
      text.style.textDecoration = "none";
      alert("BoringBetty!")
   }
}

function makeMoo() {
   let text = document.getElementById("text");
   let upperCaseText = text.value.toUpperCase();
   let upperCastTextParts = upperCaseText.split(".")
   text.value = upperCastTextParts.join("-Moo");
}