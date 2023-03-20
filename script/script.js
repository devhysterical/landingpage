var vectorIcon1 = document.getElementById("vectorIcon1");
if (vectorIcon1) {
  vectorIcon1.addEventListener("click", function() {
    var anchor = documemt.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.srollIntoView({block: "start", behavior: "smooth"});
    }
  });
}