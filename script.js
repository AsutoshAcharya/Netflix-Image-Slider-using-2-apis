const centerDiv = document.getElementById("center-div");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
  .then((res) => {
    return res.json();
  })
  .then((actualdata) => {
    actualdata.map((val) => {
      // key=val.id;
      let img = document.createElement("img");
      img.src = `https://picsum.photos/200/200?random=${val.id}`;
      centerDiv.appendChild(img);
    });
  });

  
