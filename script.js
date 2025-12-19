const ramos = [
  // SEMESTRE 1
  { nombre: "Bases morfológicas y estructurales I", semestre: "Semestre 1", prereq: [] },
  { nombre: "Biología Celular", semestre: "Semestre 1", prereq: [] },
  { nombre: "Física aplicada a la Odontología", semestre: "Semestre 1", prereq: [] },
  { nombre: "Introducción a la Odontología I", semestre: "Semestre 1", prereq: [] },
  { nombre: "Habilidades Comunicativas", semestre: "Semestre 1", prereq: [] },
  { nombre: "Inglés I", semestre: "Semestre 1", prereq: [] },

  // SEMESTRE 2
  { nombre: "Bases morfológicas y estructurales II", semestre: "Semestre 2", prereq: ["Bases morfológicas y estructurales I"] },
  { nombre: "Genética Molecular Humana", semestre: "Semestre 2", prereq: ["Biología Celular"] },
  { nombre: "Química General e Inorgánica", semestre: "Semestre 2", prereq: ["Física aplicada a la Odontología"] },
  { nombre: "Introducción a la Odontología II", semestre: "Semestre 2", prereq: ["Introducción a la Odontología I"] },
  { nombre: "Inglés II", semestre: "Semestre 2", prereq: ["Inglés I"] },

  // ANUAL SEGUNDO AÑO
  { nombre: "Biomateriales Dentales", semestre: "Anual Segundo Año", prereq: [
    "Bases morfológicas y estructurales II",
    "Química General e Inorgánica",
    "Introducción a la Odontología II"
  ]},

  // SEMESTRE 3
  { nombre: "Fisiología", semestre: "Semestre 3", prereq: ["Bases morfológicas y estructurales II"] },
  { nombre: "Bioquímica General", semestre: "Semestre 3", prereq: ["Biología Celular", "Química General e Inorgánica"] },
  { nombre: "Microbiología Oral", semestre: "Semestre 3", prereq: ["Genética Molecular Humana"] },
  { nombre: "Patología General I", semestre: "Semestre 3", prereq: [
    "Bases morfológicas y estructurales II",
    "Genética Molecular Humana"
  ]},
  { nombre: "Inglés III", semestre: "Semestre 3", prereq: ["Inglés II"] },

  // SEMESTRE 4
  { nombre: "Bioquímica Oral", semestre: "Semestre 4", prereq: ["Bioquímica General"] },
  { nombre: "Patología General II", semestre: "Semestre 4", prereq: ["Fisiología", "Patología General I"] },
  { nombre: "Promoción y Educación en Salud", semestre: "Semestre 4", prereq: ["Introducción a la Odontología II"] },
  { nombre: "Farmacología", semestre: "Semestre 4", prereq: ["Fisiología", "Microbiología Oral"] },
  { nombre: "Inglés IV", semestre: "Semestre 4", prereq: ["Inglés III"] },

  // ANUAL TERCER AÑO
  { nombre: "Patología Dentomaxilofacial", semestre: "Anual Tercer Año", prereq: ["Patología General II", "Farmacología"] },
  { nombre: "Imagenología Dentomaxilar", semestre: "Anual Tercer Año", prereq: ["Patología General II"] },
  { nombre: "Cirugía Bucal Básica", semestre: "Anual Tercer Año", prereq: ["Patología General II", "Farmacología"] },
  { nombre: "Fisiología Oral y Oclusión", semestre: "Anual Tercer Año", prereq: ["Biomateriales Dentales"] },
  { nombre: "Integrador I: Preclínico Integrado", semestre: "Anual Tercer Año", prereq: [
    "Biomateriales Dentales",
    "Promoción y Educación en Salud"
  ]},

  // SEMESTRE 6
  { nombre: "Cariología Clínica", semestre: "Semestre 6", prereq: [
    "Bioquímica Oral",
    "Patología General II",
    "Promoción y Educación en Salud"
  ]},

  // ANUAL CUARTO AÑO
  { nombre: "Rehabilitación Oral", semestre: "Anual Cuarto Año", prereq: [
    "Fisiología Oral y Oclusión",
    "Cariología Clínica",
    "Integrador I: Preclínico Integrado"
  ]},
  { nombre: "Cirugía Dentomaxilar", semestre: "Anual Cuarto Año", prereq: [
    "Patología Dentomaxilofacial",
    "Imagenología Dentomaxilar",
    "Cirugía Bucal Básica"
  ]},
  { nombre: "Endodoncia", semestre: "Anual Cuarto Año", prereq: [
    "Imagenología Dentomaxilar",
    "Cirugía Bucal Básica"
  ]},
  { nombre: "Periodoncia", semestre: "Anual Cuarto Año", prereq: [
    "Imagenología Dentomaxilar",
    "Cirugía Bucal Básica",
    "Integrador I: Preclínico Integrado"
  ]},

  // SEMESTRE 7
  { nombre: "Ética y Psicología orientada a la Práctica Clínica", semestre: "Semestre 7", prereq: ["Promoción y Educación en Salud"] },

  // SEMESTRE 8
  { nombre: "Salud Pública Odontológica", semestre: "Semestre 8", prereq: ["Cariología Clínica"] },
  { nombre: "Medicina Oral", semestre: "Semestre 8", prereq: ["Patología Dentomaxilofacial"] },

  // ANUAL QUINTO AÑO
  { nombre: "Cirugía y Traumatología Maxilofacial", semestre: "Anual Quinto Año", prereq: [
    "Cirugía Dentomaxilar",
    "Medicina Oral"
  ]},
  { nombre: "Ortodoncia y Ortopedia Dentomaxilar", semestre: "Anual Quinto Año", prereq: [
    "Periodoncia",
    "Ética y Psicología orientada a la Práctica Clínica"
  ]},
  { nombre: "Odontopediatría", semestre: "Anual Quinto Año", prereq: [
    "Rehabilitación Oral",
    "Cirugía Dentomaxilar",
    "Endodoncia",
    "Periodoncia"
  ]},
  { nombre: "INTEGRADOR II: Clínica Integral del Adulto y Odontogeriatría", semestre: "Anual Quinto Año", prereq: [
    "Ética y Psicología orientada a la Práctica Clínica",
    "Rehabilitación Oral",
    "Endodoncia",
    "Periodoncia"
  ]},

  // SEMESTRE 9
  { nombre: "Pensamiento Crítico", semestre: "Semestre 9", prereq: ["Habilidades Comunicativas"] },

  // SEMESTRE 10
  { nombre: "Odontología basada en la evidencia", semestre: "Semestre 10", prereq: ["Salud Pública Odontológica"] },
  { nombre: "Administración y gestión en Odontología", semestre: "Semestre 10", prereq: ["Salud Pública Odontológica"] },

  // ANUAL SEXTO AÑO
  { nombre: "Proyecto de Investigación", semestre: "Anual Sexto Año", prereq: [
    "Pensamiento Crítico",
    "Cirugía y Traumatología Maxilofacial",
    "Ortodoncia y Ortopedia Dentomaxilar",
    "Odontopediatría",
    "Odontología basada en la evidencia",
    "Administración y gestión en Odontología",
    "INTEGRADOR II: Clínica Integral del Adulto y Odontogeriatría"
  ]},
  { nombre: "INTEGRADOR III: Internado Clínico", semestre: "Anual Sexto Año", prereq: [
    "Pensamiento Crítico",
    "Cirugía y Traumatología Maxilofacial",
    "Ortodoncia y Ortopedia Dentomaxilar",
    "Odontopediatría",
    "Odontología basada en la evidencia",
    "Administración y gestión en Odontología",
    "INTEGRADOR II: Clínica Integral del Adulto y Odontogeriatría"
  ]}
];

const contenedor = document.getElementById("malla");
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function puedeActivarse(ramo) {
  return ramo.prereq.every(r => aprobados.includes(r));
}

function render() {
  contenedor.innerHTML = "";
  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${sem}</h2>`;

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const r = document.createElement("div");
      r.className = "ramo";

      if (aprobados.includes(ramo.nombre)) {
        r.classList.add("aprobado");
      } else if (puedeActivarse(ramo)) {
        r.classList.add("activo");
      }

      r.textContent = ramo.nombre;

      // TOCAR: alternar aprobado / no aprobado
      r.onclick = () => {
        if (aprobados.includes(ramo.nombre)) {
          aprobados = aprobados.filter(a => a !== ramo.nombre); // desmarcar
        } else {
          if (ramo.prereq.length === 0 || ramo.prereq.every(pr => aprobados.includes(pr))) {
            aprobados.push(ramo.nombre); // marcar
          } else {
            alert("No puedes marcar este ramo aún, faltan prerequisitos 😅");
          }
        }
        localStorage.setItem("aprobados", JSON.stringify(aprobados));
        render();
      };

      div.appendChild(r);
    });

    contenedor.appendChild(div);
  });
}

render();
