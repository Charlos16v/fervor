const grid = document.getElementById('revistaGrid');

revistas.forEach(revista => {
  const link = document.createElement('a');
  link.href = `detalle.html?id=${revista.id}`;
  link.className = 'card';
  link.innerHTML = `
    <img src="${revista.imagen}" alt="Portada de ${revista.titulo}" />
    <div class="card-content">
      <h2 class="card-title">${revista.titulo}</h2>
      <p class="card-date">${revista.fecha}</p>
    </div>
  `;
  grid.appendChild(link);
});
