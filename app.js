// ナビの active を現在のページに自動付与
(() => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
    else a.classList.remove("active");
  });
})();

// 既存のクリック動作（もし使ってるなら）
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
if (btn && msg) {
  btn.addEventListener("click", () => {
    msg.textContent = "押された！";
  });
}
// ダークモード切替（保存付き）
(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  const syncIcon = () => {
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  };
  syncIcon();

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    syncIcon();
  });
})();
