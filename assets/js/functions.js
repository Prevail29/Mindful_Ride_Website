// Opens Google Docs form in new tab 
// TODO: Replace url with the Google Docs form
function openForm(){
    window.open('https://example.com/', '_blank').focus()
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