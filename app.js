const traslateBox = document.getElementById("translate_box");

traslateBox.addEventListener("input", (e) => {
  const url = new URL("https://inputtools.google.com/request");
  url.searchParams.set("itc", "te-t-i0-und");
  url.searchParams.set("cp", 0);
  url.searchParams.set("cs", 1);
  url.searchParams.set("ie", "utf-8");
  url.searchParams.set("oe", "utf-8");
  url.searchParams.set("app", "demopage");
  url.searchParams.set("text", "samayam");

  fetch(url, {
    method: "POST",
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
