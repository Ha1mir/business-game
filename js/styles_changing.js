const mapChanging = {
  changeMapRowToColumnCallback: (() => {
    let doResize;
    let mediaQueryMatching = window.matchMedia("(orientation: landscape)").matches;
    function innerFunction () {
      const mediaQueryObject = window.matchMedia("(orientation: landscape)");
      if (mediaQueryObject.matches ^ mediaQueryMatching) {
        const galaxyMapElements = Array.from(document.getElementsByClassName("main_glx-map_wrapper")[0].children);
        for (const galaxyMapElement of galaxyMapElements) {
          const elementComputedStyles = window.getComputedStyle(galaxyMapElement);
          const [elementRow, elementColumn] = [elementComputedStyles.gridRow, elementComputedStyles.gridColumn];
          [galaxyMapElement.style.gridColumn, galaxyMapElement.style.gridRow] = [elementRow, elementColumn];
        }

        galaxyMapDOM.renderFlyToDestination(galaxyMapDOM.currentLocationElement());
      }

      mediaQueryMatching = mediaQueryObject.matches;
    }

    return function() {
      clearTimeout(doResize);
      doResize = setTimeout(innerFunction, 100);
    }
  })()
};

window.addEventListener("resize", mapChanging.changeMapRowToColumnCallback);
window.addEventListener("load", () => {
  const mediaQueryObject = window.matchMedia("(orientation: landscape)");
  if (mediaQueryObject.matches) {
    const galaxyMapElements = Array.from(document.getElementsByClassName("main_glx-map_wrapper")[0].children);
    for (const galaxyMapElement of galaxyMapElements) {
      const elementComputedStyles = window.getComputedStyle(galaxyMapElement);
      const [elementRow, elementColumn] = [elementComputedStyles.gridRow, elementComputedStyles.gridColumn];
      [galaxyMapElement.style.gridColumn, galaxyMapElement.style.gridRow] = [elementRow, elementColumn];
    }

    galaxyMapDOM.renderFlyToDestination(galaxyMapDOM.currentLocationElement());
  }
});

