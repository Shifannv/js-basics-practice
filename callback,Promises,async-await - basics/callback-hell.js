// // Callback Hell basic example
// // Simulate asynchronous operations with setTimeout and nested callbacks

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Fetched user:", id);
//     callback(null, { id: id, name: "Alice" });
//   }, 500);
// }

// function getPosts(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetched posts for user:", userId);
//     callback(null, [
//       { id: 1, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ]);
//   }, 500);
// }

// function getComments(postId, callback) {
//   setTimeout(() => {
//     console.log("Fetched comments for post:", postId);
//     callback(null, ["Nice post!", "Thanks for sharing"]);
//   }, 500);
// }

// // Demonstrate callback hell with deeply nested callbacks
// getUser(42, function (err, user) {
//   if (err) {
//     return console.error(err);
//   }

//   getPosts(user.id, function (err, posts) {
//     if (err) {
//       return console.error(err);
//     }

//     // process first post
//     getComments(posts[0].id, function (err, comments) {
//       if (err) {
//         return console.error(err);
//       }

//       console.log("User:", user.name);
//       console.log("First post title:", posts[0].title);
//       console.log("Comments:", comments.join(" | "));

//       // More nested callbacks to illustrate the problem
//       setTimeout(function () {
//         console.log("Doing another async task...");
//         setTimeout(function () {
//           console.log("Another nested async task finished.");
//         }, 300);
//       }, 300);
//     });
//   });
// });

// Note: This nesting of callbacks is often called "callback hell" or the "pyramid of doom".
// Promises or async/await are used to flatten and simplify this flow.

//
// this is ai given code

//

// this code i written >>

// callback hell = situation in javascript where callbacks are nested within other callbacks to the
//  degree where the code is difficult to read.
// old pattern to handle asynchronous functions
//  use  promise  + async to avoid call back hell

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback()
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback()
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback()
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback()
  }, 1500);
}

task1(()=>{
    task2(() =>{
        task3(()=>{
            task4(()=> console.log("all task completed")
            )
        })
    })
}
)
