var targetText = "Сделать репост"; // Change the text to the one that appears when you hover over the retweet button. (The script was developed for the Russian localization of the site.)
var maxAttempts = 300; // Maximum number of attempts (retweets)
var currentAttempt = 0;

startReposting();

function performRepost() {
  if (currentAttempt < maxAttempts) {
    var buttonElements = document.querySelectorAll('button');

    for (var i = 0; i < buttonElements.length; i++) {
      var button = buttonElements[i];

      if (button.getAttribute("aria-label") && button.getAttribute("aria-label").includes(targetText)) {
        button.click();

        setTimeout(function () {
          const spans = document.querySelectorAll('span');

          for (const span of spans) {
            if (span.textContent === targetText) {
              span.click();
              return;
            }
          }
        }, 1000);
        return;
      }
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

