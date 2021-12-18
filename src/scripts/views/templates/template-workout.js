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
            ${result.warmup.map((warm) => `
                <li>${warm.ex} ${warm.du}</li>
            `).join('')}
            </ul>
        </div>
        <div class="col-md-4">
            <h3>Workout</h3>
            <ul class="list-unstyled">
            ${result.workout.map((work) => `
                <li>${work.ex} ${work.du}</li>
            `).join('')} 
            </ul>
        </div>
        <div class="col-md-4">
            <h3>Cooldown</h3>
            <ul class="list-unstyled">
            ${result.cooldown.map((cool) => `
                <li>${cool.ex} ${cool.du}</li>
            `).join('')}
            </ul>
        </div>
    </div>
`;

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

export { createResultTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
