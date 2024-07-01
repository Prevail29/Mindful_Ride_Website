// Opens Google Docs form in new tab 
// TODO: Replace url with the Google Docs form
function openForm(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScZltOQXFafUObCYSgJic5tCj-y845e89dU7oRRwwI7z6c59A/viewform?usp=sf_link', '_blank').focus()
}

let prevScrollPos = window.scrollY;
window.addEventListener("scroll", function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-5em";
    }
    prevScrollPos = currentScrollPos;
});

screen.orientation.lock("portrait-primary");