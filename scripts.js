let toggleSidebar = document.querySelector('#toggle-sidebar');
let closeButton = document.querySelector('#close');
let header = document.querySelector('#header');
let content = document.querySelector('#content');
let sidebar = document.querySelector('#sidebar');

toggleSidebar.onclick = () => {
    header.style.display = 'none';
    content.style.display = 'none';
    sidebar.style.display = 'grid';
}
closeButton.onclick = () => {
    header.style.display = 'grid';
    content.style.display = 'grid';
    sidebar.style.display = 'none';
}