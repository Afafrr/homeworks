"use strict";

//FETCH
async function getRandomUserFetch(url) {
  const data = await fetch(url).then((res) => {
    return res.json();
  });
  const { results } = data;
  const usersDiv = document.querySelector(".users");

  results.forEach((user) => {
    const { name, picture, phone } = user;
    const userElement = `
    <div style = "margin: 20px">
        <img src='${picture.medium}'/>
        <h2>${name?.first}</h2>
        <h2> ${name?.last}</h2>
        <p>Phone: ${phone}</p>
        <br/>
    </div>`;
    usersDiv.innerHTML += userElement;
  });
}

//XMLHttpRequest
function getRandomUserXHR(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.send();

  req.onload = () => {
    const data = JSON.parse(req.response);
    const { results } = data;
    const usersDiv = document.querySelector(".users");

    results.forEach((user) => {
      const { name, picture, phone } = user;
      const userElement = `
      <div style = "margin: 20px">
          <img src='${picture.medium}'/>
          <h2>${name?.first}</h2>
          <p>Phone: ${phone}</p>
          <br/>
      </div>`;
      usersDiv.innerHTML += userElement;
    });
  };
}

// getRandomUserFetch("https://randomuser.me/api/?results=10");
getRandomUserXHR("https://randomuser.me/api/?results=10");
