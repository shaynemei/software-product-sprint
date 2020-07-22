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

/** Load random quote from DataStore and add to page. */
async function getRandomQuote() {
  const response = await fetch('/quote');
  const quote = await response.text();
  document.getElementById('quote-container').innerText = quote;
}

/** Load comment from DataStore and add to page as list items. */
function getComments() {
  fetch('/comment').then(response => response.json()).then((history) => {
    const commentEl = document.getElementById('comment-container');
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

function logIn() {
  fetch('/').then(response => response)
}