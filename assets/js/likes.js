const app = document.querySelector("#likes-list");
const RSS_URL = `https://getpocket.com/users/*em1604085158936836b/feed/read`;
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";


fetch(PROXY_URL + RSS_URL)
    .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      var url = new URL(el.querySelector("link").innerHTML);
      html += `
        <article class="LikesItem">
          <h3 class="LikesItem-title size-3 as-link">
            <a class="link-dark" href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML.replace('<![CDATA[','').replace(']]>','')}
            </a>
          </h3>
          <div class="LikesItem-url">${url.hostname.replace(
            "www",
            ""
          )}</div>
        </article>
      `;
    });
    app.insertAdjacentHTML("beforeend", html);
  });


