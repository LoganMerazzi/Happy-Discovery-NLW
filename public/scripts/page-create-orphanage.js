const map = L.map('mapid').setView([-29.9241407,-51.1804519], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]

})

// create and add markers

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker &&  map.removeLayer(marker);

    // add icon Layer
    marker = L.marker([lat, lng], { icon }).addTo(map);

})

// inclusão dos campos de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images');
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');
  //realizar o clone da ultima imagem adicionada.
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
  // se o campo está vazio, nào adiciona
  const input = newFieldContainer.children[0];
  if (input.value == "" ){ 
      return;
  }

  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  // adicionar o clone ao container de #imagens
  container.appendChild(newFieldContainer);

}

function deleteField(event){
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2){
      // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return
  }
  // deletar o campos
  span.parentNode.remove();
}

function toggleSelect (event){
  
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))

  const button = event.currentTarget;
  button.classList.add("active");
 
  const input = document.querySelector('[name="open_on_weekends"]')
  input.value = button.dataset.value;
}
