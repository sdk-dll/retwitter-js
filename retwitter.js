var targetText = "Сделать репост"; // Change the text to the one that appears when you hover over the retweet button. (The script was developed for the Russian localization of the site.)
var maxAttempts = 300; // Maximum number of attempts (retweets)
var currentAttempt = 0;

startReposting();

function performRepost() {
  var divElements = document.querySelectorAll('div');
  for (var i = 0; i < divElements.length; i++) {
    var div = divElements[i];
    if (div.getAttribute("aria-label") && div.getAttribute("aria-label").includes(targetText)) {
      div.click();
      setTimeout(function () {
        const spans = document.querySelectorAll('span');
        for (const span of spans) {
          if (span.textContent === targetText) {
            span.click();
            return;
          }
        }
      }, 1000);
    }
  }
}

function startReposting() {
  if (currentAttempt < maxAttempts) {
    performRepost();
    currentAttempt++;
    window.scrollBy(0, -1050);
    setTimeout(startReposting, 500);
  }
}
