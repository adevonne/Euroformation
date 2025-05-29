window.addEventListener('DOMContentLoaded', () => {
  const inject = (id, path) => {
    fetch(path)
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById(id);
        if (container) container.innerHTML = html;
      });
  };

  // ✅ Utilise des chemins absolus depuis la racine du projet
  inject('header', '/components/header.html');
  inject('footer', '/components/footer.html');
});
