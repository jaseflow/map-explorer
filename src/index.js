import './styles.css'

document.addEventListener('DOMContentLoaded', (e) => {
  const btn = document.getElementById('explore')
  const mapEl = document.getElementById('map')
  const mapClose = document.getElementById('map-close')
  const explorer = document.getElementById('explorer')
  const explorerHeader = document.getElementById('explorer-header')

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    mapEl.classList.add('map--show');
  })

  mapClose.addEventListener('click', (e) => {
    mapEl.classList.remove('map--show');
  })

  explorerHeader.addEventListener('click', (e) => {
    console.log('running');
    explorer.classList.toggle('explorer--visible');
  })

})

