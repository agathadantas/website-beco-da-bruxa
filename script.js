document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});

function showTab(event, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByTagName("a");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}

// Lightbox para galeria de fotos
var galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        var imageUrl = this.getAttribute("href");

        var lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.innerHTML = '<span class="close-lightbox">&times;</span><img src="' + imageUrl + '">';

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function() {
            lightbox.remove();
        });
    });
});
