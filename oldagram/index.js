const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

document.getElementById("user-full-name").innerHTML = posts[0].name;
document.getElementById("username").innerHTML = posts[0].username;
document.getElementById("location").innerHTML = posts[0].location;
document.getElementById("avatar").src = posts[0].avatar;
document.getElementById("post").src = posts[0].post;
document.getElementById("comment").innerHTML = posts[0].comment;
document.getElementById("likes").innerHTML = `${posts[0].likes} likes` 

document.getElementById("user-full-name1").innerHTML = posts[1].name;
document.getElementById("username1").innerHTML = posts[1].username;
document.getElementById("location1").innerHTML = posts[1].location;
document.getElementById("avatar1").src = posts[1].avatar;
document.getElementById("post1").src = posts[1].post;
document.getElementById("comment1").innerHTML = posts[1].comment;
document.getElementById("likes1").innerHTML = `${posts[1].likes} likes` 

document.getElementById("user-full-name2").innerHTML = posts[2].name;
document.getElementById("username2").innerHTML = posts[2].username;
document.getElementById("location2").innerHTML = posts[2].location;
document.getElementById("avatar2").src = posts[2].avatar;
document.getElementById("post2").src = posts[2].post;
document.getElementById("comment2").innerHTML = posts[2].comment;
document.getElementById("likes2").innerHTML = `${posts[2].likes} likes` 

let likes = posts[0].likes
function increment(){
    likes += 1
    document.getElementById("likes").innerHTML = `${likes} likes`
}
document.getElementById("post").addEventListener("dblclick", function(){
    increment()
})

let likes1 = posts[1].likes
function increment1(){
    likes1 += 1
    document.getElementById("likes1").innerHTML = `${likes1} likes`
}
document.getElementById("post1").addEventListener("dblclick", function(){
    increment1()
})

let likes2 = posts[2].likes
function increment2(){
    likes2 += 1
    document.getElementById("likes2").innerHTML = `${likes2} likes`
}
document.getElementById("post2").addEventListener("dblclick", function(){
    increment2()
})