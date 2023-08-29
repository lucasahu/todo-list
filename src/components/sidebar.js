const sidebar = document.createElement('div');

sidebar.classList.add('sidebar-component');

sidebar.innerHTML = `
<div class="sidebar-links">
    <div class="sidebar-title-container"><h1 class="sidebar-title">checky.io</h1></div>
    <a href="">HOME</a>
    <a href="">PROJECTS</a>
    <a href="">NOTES</a>
    <a href="">UPCOMING</a>
</div>`

export { sidebar };