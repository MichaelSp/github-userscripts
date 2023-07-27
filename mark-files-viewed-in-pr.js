// ==UserScript==
// @name        GitHub Diff mark viewed
// @version     0.1.3
// @description Mark files in GitHubs PR diff view as viewed with a shortcut 'v'
// @license     MIT
// @author      Michael Sprauer
// @namespace   https://github.com/MichaelSp
// @match       https://github.com/*
// @run-at      document-idle
// @grant       none
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @supportURL  https://github.com/MichaelSp/GitHub-userscripts/issues

(function start() {

  // mark the next file as viewed if the 'v' key is pressed
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "v") {
        const nextFile = document.querySelector(
          ".js-reviewed-checkbox:not(:checked)"
        );
        if (nextFile) {
          nextFile.click();
        }
      }
    },
    false
  );
})();
