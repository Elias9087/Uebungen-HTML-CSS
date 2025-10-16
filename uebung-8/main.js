// Modal-Elemente holen
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];
var prevBtn = document.getElementsByClassName("prev")[0];
var nextBtn = document.getElementsByClassName("next")[0];

// Bilder im Gallery-Container holen
var images = Array.prototype.slice.call(document.querySelectorAll("#gallery img"));

// Aktueller Index
var currentIndex = -1;

// Öffnen des Modals mit Index
function openModalAt(index) {
  if (index < 0 || index >= images.length) return;
  currentIndex = index;
  var img = images[currentIndex];
  modal.style.display = "block";
  modalImg.src = img.src;
  modalImg.alt = img.alt || "";
  // caption aus dem figcaption neben dem img holen
  var captionEl = img.nextElementSibling;
  captionText.innerHTML = captionEl ? captionEl.innerHTML : "";
}

// Navigation Funktionen
function showNext() {
  var next = (currentIndex + 1) % images.length;
  openModalAt(next);
}
function showPrev() {
  var prev = (currentIndex - 1 + images.length) % images.length;
  openModalAt(prev);
}

// Klick-Events für Gallery-Bilder
images.forEach(function(img, idx) {
  if (!img.hasAttribute('data-index')) img.setAttribute('data-index', idx);
  img.addEventListener('click', function() {
    openModalAt(idx);
  });
});

// Buttons Events
closeBtn.onclick = function() {
  modal.style.display = "none";
};
nextBtn.onclick = showNext;
prevBtn.onclick = showPrev;


// Klick ausserhalb des Bildes
modal.addEventListener('click', function(e) {
  if (e.target === modal) modal.style.display = "none";
});
