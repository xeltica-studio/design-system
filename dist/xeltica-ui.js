"use strict";
function setupDrawer() {
    document.querySelectorAll('.drawer-container')
        .forEach(container => {
        container.open = () => {
            container.classList.add('active');
        };
        container.close = () => {
            container.classList.remove('active');
        };
        const backdrop = container.querySelector('.backdrop');
        const drawer = container.querySelector('.drawer');
        console.log(backdrop);
        console.log(drawer);
        backdrop?.addEventListener('click', container.close);
        drawer?.querySelector('.close')?.addEventListener('click', container.close);
    });
}
function setupAll() {
    setupDrawer();
}
