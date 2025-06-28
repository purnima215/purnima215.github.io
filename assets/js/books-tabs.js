document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ books-tabs.js loaded");
  
    const tabs = document.querySelectorAll(".book-tab");
    const sections = document.querySelectorAll(".book-section");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));
  
        tab.classList.add("active");
        const target = tab.getAttribute("data-target");
        document.getElementById(target).classList.add("active");
      });
    });
  
    const defaultTab = document.querySelector(".book-tab[data-target='english-books']");
    if (defaultTab) {
      defaultTab.click();
    } else {
      console.warn("⚠️ Default tab not found");
    }
  });
  