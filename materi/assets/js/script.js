// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.ibb.co/1MXLbBW/moon.png") 
    {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/hFG3LzS/sunny.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/1MXLbBW/moon.png";
    }
}


// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();


fetch('./data-link/materi.json')
        .then(response => response.json())
        .then(data => {
            const linksContainer = document.getElementById('linksbutton');

            data.links.forEach(link => {
                const anchor = document.createElement('a');
                anchor.href = link.url;
                anchor.target = '_blank';
                anchor.className = 'links';
                anchor.innerHTML = `${link.icon} ${link.text}`;
                linksContainer.appendChild(anchor);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));