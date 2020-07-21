// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// comment to fix PR not showing.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const greetings =
      ['Do not pray for an easy life. Pray for the strength to endure a difficult one.', '以無法為有法 以無限為有限。', 'Qui n’avance pas, recule.', 'Fallaces sunt rerim species'];

  // Pick a random quote.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function getRandomQuote() {
  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('quote-container').innerText = quote;
}

/** Load comment from DataStore and add to page as list items. */
function getComments() {
  fetch('/load_comment').then(response => response.json()).then((history) => {
    const commentEl = document.getElementById('comments');
    history.forEach((comment) => {
      commentEl.appendChild(createListElement(comment.text));
    });
  });
}

/** Helper function to add list items to page. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

