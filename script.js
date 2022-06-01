// const apiUrl = "https://randomuser.me/api?";
// let userArgs = [];

// const fetchUsers = async (params = "results=2") => {
//   fetch(apiUrl + params)
//     .then((response) => response.json())
//     .then((data) => {
//       userArgs = data.results;
//       displayUsers();
//     })
//     .catch((err) => console.log(err));
// };

// const displayUsers = (args = userArgs) => {
//   let str = "";
//   args.map((user, i) => {
//     str += `
//       <div class="male">
//                 <h3>${user.gender}</h3>
//             </div>
//       `;
//   });
//   document.getElementById("result").innerHTML = str;
// };

// fetchUsers();

//  <div class="male">
//                 <h3>${user.gender}</h3>
//                 <img src="male.webp" alt="" srcset="">
//             </div>
//             <div class="female">
//                 <h3>${user.gender}</h3>
//                 <img src="female.webp" alt="" srcset="">
//             </div>

const displayEl = document.querySelector(".display-box").val;
console.log(displayEl);
