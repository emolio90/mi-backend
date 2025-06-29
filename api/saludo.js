// api/saludo.js
export default function handler(req, res) {
  res.status(200).json({
    mensaje: "¡Hola Emilio! Este es tu backend serverless en Vercel.",
    fecha: new Date().toISOString(),
    tareas: [
      { id: 1, title: "Prepara portfolio" },
      { id: 2, title: "Practica backend serverless" },
      { id: 3, title: "Haz entrevistas" },
    ]
  });
}
