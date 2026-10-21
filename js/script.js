const ruta = window.location.pathname.toLowerCase();
const pagina = ruta.split("/").pop();

document.body.innerHTML = "";
document.body.className = "";

// Crear encabezado
const encabezado = document.createElement("header");
encabezado.className = "encabezado";
encabezado.innerHTML = `
 
`;

document.body.appendChild(encabezado);

// Crear menú
function crearMenu() {
  const nav = document.createElement("nav");
  nav.className = "menu";

  nav.innerHTML = `
    <a href="./index.html">Menú Principal</a>
    <a href="./ejercicio2.html">Opción 1</a>
    <a href="./ejercicio3.html">Opción 2</a>
  `;

  return nav;
}

// Crear página principal
function crearPaginaPrincipal() {
  document.title = "Menú Principal";
  document.body.classList.add("pagina-inicio");

  const main = document.createElement("main");
  main.className = "inicio-contenido";

  main.innerHTML = `
    <h1>Menú Principal</h1>
    <p>Selecciona una página para continuar.</p>

    <div class="opciones-inicio">
      <a href="./ejercicio2.html">Opción 1</a>
      <a href="./ejercicio3.html">Opción 2</a>
    </div>
  `;

  document.body.appendChild(main);
}

// Crear ejercicio 2
function crearEjercicio2() {
  document.title = "Ejemplo CSS # 2";
  document.body.classList.add("pagina-galeria");

  const main = document.createElement("main");
  main.className = "galeria-contenido";

  const elementos = [
    ["Real Estate", "images/real_estate.jpg"],
    ["Library", "images/library.jpg"],
    ["Transportation", "images/transportation.jpg"],
    ["Gas & Oil", "images/gas_oil.jpg"],
    ["Marketing Agency", "images/marketing_agency.jpg"],
    ["Pizza", "images/pizza.jpg"],
    ["Flooring", "images/flooring.jpg"],
    ["Steel Processing", "images/steel_processing.jpg"],
    ["Coming Soon", "images/coming_soon.jpg"]
  ];

  main.innerHTML = `
    <h1>Beautiful, Hand-crafted Layouts</h1>
  `;

  const grid = document.createElement("section");
  grid.className = "galeria-grid";

  elementos.forEach(([nombre, direccion]) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-galeria";

    tarjeta.innerHTML = `
      <img src="${direccion}" alt="${nombre}">
      <p>${nombre}</p>
    `;

    grid.appendChild(tarjeta);
  });

  main.appendChild(grid);
  document.body.appendChild(main);
}

// Crear ejercicio 3
function crearEjercicio3() {
  document.title = "Ejercicio CSS # 3";
  document.body.classList.add("pagina-servicios");

  const main = document.createElement("main");
  main.className = "servicios-contenido";

  main.innerHTML = `
    <section class="introduccion-servicios">
      <h1>What We Do</h1>

      <p>This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites.</p>

      <p>Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our Tooplate Facebook page.</p>
    </section>

    <section class="servicios-grid">
      <article class="servicio">
        <img src="images/market_analysis_icon.jpg" alt="Market Analysis">
        <div>
          <h2>Market Analysis</h2>
          <p>Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.</p>
        </div>
      </article>

      <article class="servicio">
        <img src="images/fast_support_icon.jpg" alt="Fast Support">
        <div>
          <h2>Fast Support</h2>
          <p>Credit goes to Pexels website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.</p>
        </div>
      </article>

      <article class="servicio">
        <img src="images/top_security_icon.jpg" alt="Top Security">
        <div>
          <h2>Top Security</h2>
          <p>You have no authority to post this template as a ZIP file on your template collection websites. You can use this template for your commercial websites.</p>
          <a class="boton" href="./ejercicio2.html">Learn More</a>
        </div>
      </article>

      <article class="servicio">
        <img src="images/social_work_icon.jpg" alt="Social Work">
        <div>
          <h2>Social Work</h2>
          <p>You can change Font Awesome icons by either fas or far in the HTML codes. For Examples:</p>
          <p><code>&lt;i class="fas fa-users"&gt;&lt;i class="far fa-chart-bar"&gt;</code></p>
          <a class="boton" href="./index.html">Details</a>
        </div>
      </article>
    </section>
  `;

  document.body.appendChild(main);
}

// Mostrar el menú en las páginas de ejercicios
if (pagina === "ejercicio2.html" || pagina === "ejercicio3.html") {
  document.body.appendChild(crearMenu());
}

// Seleccionar la página correspondiente
if (pagina === "ejercicio2.html") {
  crearEjercicio2();
} else if (pagina === "ejercicio3.html") {
  crearEjercicio3();
} else {
  crearPaginaPrincipal();
}