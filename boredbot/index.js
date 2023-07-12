const findBtn = document.getElementById('find');
const activityEl = document.getElementById('activity');

function getActivity(){
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            activityEl.textContent = data.activity;
            activityEl.classList.add('show');
        })
        .catch(error => {
            activityEl.textContent = 'Failed to fetch activity. Please try again.';
            activityEl.classList.add('show');
        });
}

findBtn.addEventListener('click', getActivity);
