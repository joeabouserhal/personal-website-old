$(document).ready(function () {
  const button = $(".anchor-link");
  button.click(() => {
    setTimeout(() => {
      removeHash();
    }, 5);
  });

  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});
