function themeChange() {
  var element = document.body;
  element.classList.toggle("dark-theme");

  var icon = document.getElementById("icon");
  var gmail = document.getElementById("gmail")
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "icons/light-mode.png"
  }
  else{
    icon.src = "icons/dark-mode.png"
  }
}