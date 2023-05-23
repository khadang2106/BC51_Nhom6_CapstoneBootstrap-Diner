/* SWITCHING THEME */
//Switching to dark theme
var darkThemeIcon = document.getElementById('darkThemeIcon');
darkThemeIcon.onclick = function(){
    document.getElementById('dinerBody').classList.add('dark');
};
//Switching to light theme
var lightThemeIcon = document.getElementById('lightThemeIcon');
lightThemeIcon.onclick = function(){
    document.getElementById('dinerBody').classList.remove('dark');
};