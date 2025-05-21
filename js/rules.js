const rulesElements = {
  rulesButtonElement: document.querySelector(".header_rules-btn"),
  gameRulesWrapper: document.querySelector(".game-rules_wrapper"),
  gameRulesWrapperClose: document.querySelector(".game-rules_close-btn"),
};

rulesElements.rulesButtonElement.addEventListener("click", () => {
  rulesElements.gameRulesWrapper.style.display = "block";
});

rulesElements.gameRulesWrapperClose.addEventListener("click", () => {
  rulesElements.gameRulesWrapper.style.display = "none";
});