This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1 align="center">
    <picture>
      <source srcset="./assets/ic_notarium_light_white.png" media="(prefers-color-scheme: dark)">
      <img src="./assets/ic_notarium_light_black.png" alt="Notarium Mobile App" width="30">
    </picture>
    Notarium
  </h1>
  <p><b>Notarium</b> es un sistema de gestión de notas académicas diseñado para simplificar el seguimiento y análisis del rendimiento estudiantil. Este software permite registrar estudiantes, asignaturas y configurar sus calificaciones, como sus parámetros, notas y porcentajes, permite calcular promedios y generar reportes en PDF detallados.</p>
  <img src="./assets/Notarium.png" alt="Notarium Mobile App">

  <hr>

  <!-- Características principales -->
  <h2>🚀 Características principales</h2>
  <ul>
    <li><strong>📚 Gestión de estudiantes</strong>: Registra, actualiza y elimina estudiantes fácilmente.</li>
    <li><strong>📝 Evaluaciones personalizadas</strong>: Define evaluaciones con diferentes pesos para cada asignatura.</li>
    <li><strong>📊 Informes y Estadísticas</strong>: Análisis de rendimiento y progreso académico.</li>
    <li><strong>📂 Reportes dinámicos</strong>: Crea reportes en PDF para cada estudiante.</li>
    <li><strong>✨ Interfaz intuitiva</strong>: Sistema simple y fácil de usar para docentes y estudiantes.</li>
    <li><strong>🔒 Seguridad y Encriptación</strong>: Protección con datos encriptados.</li>
  </ul>

  <hr>
  
  <!-- Uso -->
  <h2>✨ Beneficios Clave</h2>
  <h3>1. Ahorro de Tiempo</h3>
  <p>Procesos automatizados y eficientes.</p>
  <h3>2. Análisis de Datos</h3>
  <p>Informes detallados en PDF</p>
  <h3>3. Flexibilidad de Parámetros</h3>
  <p>Parámetros de porcentajes personalizables.</p>

  <hr>

  <!-- Uso -->
  <h2>📝 Uso</h2>
  <h3>1. Registro de estudiantes</h3>
  <p>Agrega estudiantes al sistema con sus datos básicos y asignaturas.</p>
  <h3>2. Gestión de evaluaciones</h3>
  <p>Configura evaluaciones, define pesos y añade calificaciones.</p>
  <h3>3. Generación de reportes</h3>
  <p>Exporta reportes detallados en formato PDF con las calificaciones por asignatura. <a href="assets/ReporteEstudiantes.pdf">Ver PDF de ejemplo</a></p>

  <hr>

  <!-- Tecnologías utilizadas -->
  <h2>🛠️ Tecnologías utilizadas</h2>
  <ul>
    <li><strong>Lenguaje:</strong> Javascript</li>
    <li><strong>Librerías:</strong>
      <ul>
        <li>React Native: Framework para apps móviles con JavaScript.</li>
        <li>Expo: Plataforma para simplificar React Native.</li>
        <li>Native Wind: Estilos Tailwind CSS en React Native.</li>
        <li>Firebase: Base de datos y Autenticación de Google.</li>
      </ul>
    </li>
  </ul>

  <hr>

  <!-- Autor -->
  <h2>👥 Autor</h2>
  <ul>
    <li><strong><a href="https://github.com/Estebanespg">Esteban Pérez:</a></strong> Desarrollador y creador de Notarium.</li>
  </ul>
</body>
</html>