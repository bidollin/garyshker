// Garyshker live stats — loads from data/stats.json
// YouTube channel ID: UCgaryshker (update with real ID)
(async function() {
  try {
    const res = await fetch('/data/stats.json');
    const stats = await res.json();
    // Update any element with data-stat="key"
    Object.entries(stats).forEach(([key, data]) => {
      document.querySelectorAll(`[data-stat="${key}"]`).forEach(el => {
        el.textContent = data.value;
      });
    });
  } catch(e) {}
})();
