const createResultTemplate = (result) => `
    <h2>Best Result For You</h2>
    <div class="type_workout">
        <h4>Type : ${result.parameters.type}</h4>
        <h4>Area : ${result.parameters.area}</h4>
        <h4>Level : ${result.parameters.level}</h4>
    </div>
    <div class="row detail_workout">
        <div class="col-md-4">
            <h3>Warm Up</h3>
            <ul class="list-unstyled">
            ${result.warmup
    .map(
      (warm) => `
                <li>${warm.ex} ${warm.du}</li>
            `,
    )
    .join('')}
            </ul>
        </div>
        <div class="col-md-4">
            <h3>Finisher</h3>
            <ul class="list-unstyled">
            ${result.finisher
    .map(
      (work) => `
                <li>${work.ex} ${work.du}</li>
            `,
    )
    .join('')} 
            </ul>
        </div>
        <div class="col-md-4">
            <h3>Cooldown</h3>
            <ul class="list-unstyled">
            ${result.cooldown
    .map(
      (cool) => `
                <li>${cool.ex} ${cool.du}</li>
            `,
    )
    .join('')}
            </ul>
        </div>
    </div>
`;

function createResult(result) {
  const resultContainer = document.querySelector('#result');
  Object.entries(result).forEach(([key, value]) => {
    // title Element
    const title = key[0].toUpperCase() + key.substring(1);
    const titleElement = document.createElement('h3');
    titleElement.innerHTML = `${title}`;
    resultContainer.appendChild(titleElement);
    console.log(key);
    // listElement
    const listContainer = document.createElement('ul');
    // const listItem = document.createElement('li');
    if (key !== 'parameters') {
      // console.log(value);
      const node = value.map((data) => {
        console.log(data.ex);
        console.log(data.du);
        const listItem = document.createElement('li');
        listItem.textContent = `${data.ex}, ${data.du}'s`;
        return listItem;
      });
      listContainer.append(...node);
    }
    resultContainer.appendChild(listContainer);
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
  createResultTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
