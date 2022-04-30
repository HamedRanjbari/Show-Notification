const $ = document;
const btn = $.querySelector(".btn");
const notification = $.querySelector("#notification");

btn.addEventListener("click", showNotification);

function showNotification() {
  let randomNum = Math.ceil(Math.random() * 9);
  let div = $.createElement("div");
  div.classList.add("notification");
  div.innerHTML = "This is Message " + randomNum;
  console.log(randomNum);
  notification.appendChild(div);
  if (randomNum < 3) {
    div.style.color = "#8d0000";
  } else if (randomNum > 3 && randomNum < 5) {
    div.style.color = "orange";
  } else if (randomNum > 5 && randomNum < 7) {
    div.style.color = "blue";
  } else if (randomNum > 7) {
    div.style.color = "green";
  }
  setTimeout(() => {
    div.remove();
  }, 3000);
}

