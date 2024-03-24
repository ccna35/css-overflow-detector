const btn = document.getElementById("changeBg");

const changeBg = async () => {
  let [tab] = await chrome.tabs.query({ active: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const elements = document.querySelectorAll("*");
      const overflowingElements = [];

      elements.forEach((element) => {
        const { clientWidth, scrollWidth } = element;

        if (scrollWidth > clientWidth) {
          overflowingElements.push(element);
          element.style.outline = "2px solid red";
        }
      });

      console.log("Overflowing elements:", overflowingElements);
    },
  });
};

btn.addEventListener("click", changeBg);
