const traslateBox = document.getElementById("translate_box")!;
const translationsBox = document.querySelector(".translations_box");

traslateBox.addEventListener("input", (e: any) => {
  console.log(e.target.selectionStart);
  // const url = new URL("https://inputtools.google.com/request");
  // url.searchParams.set("itc", "te-t-i0-und");
  // url.searchParams.set("num", "13");
  // url.searchParams.set("cp", "0");
  // url.searchParams.set("cs", "1");
  // url.searchParams.set("ie", "utf-8");
  // url.searchParams.set("oe", "utf-8");
  // url.searchParams.set("app", "demopage");
  // url.searchParams.set("text", e.target.value);
  // fetch(url, {
  //   method: "POST",
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
