// 7.1 Hämta användare (3p)
// Du ska använda Fetch för att hämta användarinformation
// från URL:en: https://jsonplaceholder.typicode.com/users.
// Visa endast användare som har ett användar-id som är
// högre än 5.
// Presentera användarnas namn, gatuadress (street) och
// företagsnamn på HTML-sidan.

const postsEl = document.getElementById("posts");

async function getPosts() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const posts = await postsResponse.json();
  const filteredPosts = posts.filter((post) => post.id > 5);

  console.log(posts);

  filteredPosts.forEach((post) => {
    const div = document.createElement("div");
    div.setAttribute("class", "post");
    div.innerHTML = `<h2>${post.name}</h2><p>${post.street}</p><p>${post.company}</p>`;
    postsEl.appendChild(div);
  });
}
getPosts();

const postsWithCommentsEl = document.getElementById("postsWithComments");

async function getPostsWithComments() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const posts = await postsResponse.json();

  const commentsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comments = await commentsResponse.json();

  posts.forEach((post) => {
    const postComments = comments.filter(
      (comment) => comment.postId === post.id
    );

    let allComments = "";
    postComments.forEach((comment) => {
      allComments += `<p>${comment.name}</p><p>${comment.street}</p><p>${comment.company}</p>`;
    });

    const div = document.createElement("div");
    div.setAttribute("class", "post");
    div.innerHTML = `<h2>${post.name}</h2><p>${post.street}</p><p>${post.company}</p><h3>Comments</h3><div>${allComments}</div>`;
    postsWithCommentsEl.appendChild(div);
  });
}
getPostsWithComments();

// 7.2 Styla varje användare (3p)
// Varje användare ska ha följande style:
// margin: 15px
// padding: 20px
// Texten på namnet ska vara bold och 24 pixlar
// Övrig text ska vara 16 pixlar
// Text-färgen ska ha färg-kod: #333333
// Backgrundsfärgen för varje användare ska ha färg-kod: #dddddd
// När man för muspekaren över en användare ska bakgrundsfärgen ändras till #eeeeee
// Visa användare i fyra kolumner för desktop och en kolumn för mobil
