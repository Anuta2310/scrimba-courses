let postsArray = [];
const titleInput = document.getElementById('postTitle');
const bodyInput = document.getElementById('postBody');
const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', handleSubmit);

function renderPosts() {
    let html = '';
    postsArray.forEach(post => {
        html += `
            <div class="blog-post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;
    });
    document.getElementById('bloglist').innerHTML = html;
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 10);
        renderPosts();
    });


function postData(data) {
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data);
            renderPosts();
            postForm.reset();
        });
}

function handleSubmit(event) {
    event.preventDefault();
    
    const data = {
        title: titleInput.value,
        body: bodyInput.value
    };

    postData(data);
}

