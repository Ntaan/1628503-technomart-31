const feedbackLink = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".modal-feedback");
if(feedbackPopup) {
	const feedbackSubmit = feedbackPopup.querySelector('.feedback-button');

	const nameField = feedbackPopup.querySelector('#login-name');
	const emailField = feedbackPopup.querySelector('#login-mail');

	feedbackSubmit.addEventListener('click', function (evt) {
	  if(!nameField.value && !emailField.value) {
	    evt.preventDefault();
	    feedbackPopup.classList.remove('error');
	    setTimeout(function() {
	      feedbackPopup.classList.add('error');
	    }, 100);
	    return;
	  }
	});
}

function fieldChange(field) {
  this.oninput = function () {
    feedbackPopup.classList.remove('error');
  }
}
if(feedbackPopup) {
	fieldChange(nameField);
	fieldChange(emailField);
}

if(feedbackPopup)
var feedbackClose = feedbackPopup.querySelector(".modal-close");

if(feedbackLink && feedbackPopup)
feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

if(feedbackClose && feedbackPopup)
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove('error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove('error');
    }
  }
});


const basketLinks = document.querySelectorAll(".goods-item-button-buy");
const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelector(".modal-close");

basketLinks.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  });
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});

const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
if(mapPopup)
var mapClose = mapPopup.querySelector(".modal-close");

if(mapLink)
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

if(mapClose)
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
