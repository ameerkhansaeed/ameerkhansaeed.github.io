function themeChange() {
  var element = document.body;
  element.classList.toggle("dark-theme");

  var icon = document.getElementById("icon");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "icons/light-mode.png"
  }
  else{
    icon.src = "icons/dark-mode.png"
  }
}
