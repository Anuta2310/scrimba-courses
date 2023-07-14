function fetchPosts() {
    return fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        .then(res => res.json())
        .then(data => data.slice(0, 10));
}

function generateHtml(posts) {
    let html = '';
    posts.forEach(post => {
        html += `
            <div class="blog-post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;
    });
    return html;
}

function insertHtml(html) {
    const bloglistEl = document.getElementById('bloglist');
    bloglistEl.innerHTML = html;
}

fetchPosts()
    .then(posts => generateHtml(posts))
    .then(html => insertHtml(html));

function handleSubmit(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('postTitle');
    const bodyInput = document.getElementById('postBody');

    const postTitle = titleInput.value;
    const postBody = bodyInput.value;

    const postObject = {
        title: postTitle,
        body: postBody
    };

    console.log(postObject);


    titleInput.value = '';
    bodyInput.value = '';
}

const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', handleSubmit);