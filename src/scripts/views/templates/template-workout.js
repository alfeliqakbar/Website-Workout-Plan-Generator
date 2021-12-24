function createResult(result) {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  // console.log(result.parameters.duration);
  const resultContainer = document.querySelector('#result');
  if (resultContainer) {
    removeAllChildNodes(resultContainer);
  }
  resultContainer.innerHTML += `
  <h2 class="text-center">Workout Breakdown</h2>
  <div id="accordionPlaceholder" class="accordion">
    <div class="container" id="accordionOverallDiv">
      <div class="container" id="parametersContainer">
        
      </div>

    </div>
  </div>`;

  const accordionPlaceholder = document.querySelector('#accordionPlaceholder');
  const accordionItem = document.createElement('div');
  accordionItem.className = 'accordion-item';
  accordionItem.id = 'accordionItem';
  accordionPlaceholder.appendChild(accordionItem);

  const dropletIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
  </svg>`;

  Object.entries(result).forEach(([key, value]) => {
    // title Element
    const title = key[0].toUpperCase() + key.substring(1);
    // accordion header
    const accordionHeader = document.createElement('h2');
    accordionHeader.className = 'accordion-header';
    accordionHeader.id = 'heading';
    accordionItem.appendChild(accordionHeader);
    if (title !== 'Parameters') {
      // accordion button
      const accordionButton = document.createElement('button');
      accordionButton.className = 'accordion-button collapsed';
      accordionButton.type = 'button';
      accordionButton.setAttribute('data-bs-toggle', 'collapse');
      accordionButton.setAttribute('data-bs-target', '#iterator');
      accordionButton.setAttribute('aria-controls', 'iterator');
      accordionButton.innerText = `${title}`;
      accordionHeader.appendChild(accordionButton);
    }

    const accordionCollapsed = document.createElement('div');
    accordionCollapsed.className = 'accordion-collapsed collapsed';
    accordionCollapsed.id = 'iterator';
    accordionCollapsed.setAttribute('aria-labelledby', 'heading');
    accordionCollapsed.setAttribute('data-bs-parent', '#accordionPlaceholder');
    accordionItem.appendChild(accordionCollapsed);

    console.log(key);
    console.log(value);

    if (key === 'parameters') {
      const parametersContainer = document.querySelector('#parametersContainer');
      parametersContainer.innerHTML += `<p id="parametersContainer">Duration: ${value.duration}m | Type: ${value.type} | Area: ${value.area} | Level: ${value.level}</p>`;
    }

    // listElement
    const accordionBody = document.createElement('div');
    accordionBody.className = 'accordion-body';
    accordionCollapsed.appendChild(accordionBody);

    const listContainer = document.createElement('div');
    listContainer.className = 'list-group list-group-flush';
    listContainer.id = 'listContainerWorkout';
    accordionBody.appendChild(listContainer);

    if (key !== 'parameters') {
      value.forEach((data) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        listItem.id = 'bodyListItem';
        listItem.innerHTML = `${data.ex === 'transition' ? dropletIcon : data.ex}`;

        const durationSmall = document.createElement('small');
        durationSmall.className = 'text-secondary';
        durationSmall.id = 'durationSmall';
        durationSmall.innerText = `${data.du}s`;
        listItem.appendChild(durationSmall);

        listContainer.appendChild(listItem);
      });
    }
  });
}

const createLikeButtonTemplate = () => `
    <button aria-label="like this result" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this result" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createResult,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
