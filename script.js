let getDarkTheme = document.getElementById("darkTheme");
let getLightTheme = document.getElementById("lightTheme");
let getProjects = document.getElementById("projects");

getDarkTheme.addEventListener("click", setDarkTheme);
getLightTheme.addEventListener("click", setLightTheme);

function setDarkTheme() {
  var declaration = document.styleSheets[0].cssRules[0].style;
  var removedvalue = declaration.removeProperty("display");
  document.getElementById("themeSelector").style.display="none";

  var getTheme = document.getElementById("getThemeValue");
  getTheme.classList.remove("bg-light", "text-black");
  getTheme.classList.add("bg-dark", "text-white");
}

function setLightTheme() {
    var declaration = document.styleSheets[0].cssRules[0].style;
    var removedvalue = declaration.removeProperty("display");
    document.getElementById("themeSelector").style.display="none";

  var getTheme = document.getElementById("getThemeValue");
  getTheme.classList.remove("bg-dark", "text-white");
  getTheme.classList.add("bg-light", "text-black");
}
