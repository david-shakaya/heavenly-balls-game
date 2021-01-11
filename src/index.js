import './styles.css'

const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('[data-panes]'),
}
refs.controls.addEventListener('click', onControlsClick)


function onControlsClick(e) {
    if (e.target.nodeName !== 'A') {
        return
    }
    const itemActiveControl = document.querySelector('.controls__item--active');
    if (itemActiveControl) {
        itemActiveControl.classList.remove('controls__item--active')
    }
    e.target.classList.add('controls__item--active')
    const nameActiveElement = e.target.getAttribute('href')
    const curentPanes = refs.panes.querySelector(`${nameActiveElement}`);

    
    const itemActivePane = document.querySelector('.pane--active');
    if (itemActivePane) {
        itemActivePane.classList.remove('pane--active')
    }
    curentPanes.classList.add('pane--active')
}