const findBtn = document.getElementById('find');
const activityEl = document.getElementById('activity');

findBtn.addEventListener('click', getActivity);

function getActivity(){
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            activityEl.textContent = data.activity;
        })
}
