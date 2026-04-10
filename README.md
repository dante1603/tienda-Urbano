<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

Tienda Urbano Online - Microservicio

Este repositorio contiene la base del microservicio frontend para "Tienda Urbano", una plataforma e-commerce con interfaz dual (comprador/vendedor).

View your app in AI Studio: <https://ai.studio/apps/drive/1cr4va3EegW20X7HR3pvQ4BDkws81naQr>

🚀 Estrategia de Control de Versiones y Buenas Prácticas (DevOps)

Para este proyecto, el equipo ha decidido implementar GitFlow como estrategia de ramificación.

Justificación: Se eligió este modelo porque permite una separación clara entre el código estable que va a producción (main) y el código en desarrollo continuo (develop). Esto facilita la colaboración simultánea sin el riesgo de romper el entorno principal, permitiendo probar y auditar las nuevas características antes de su integración final.

🌿 Naming de Ramas (Branching)

Todas las ramas deben derivar de develop (a excepción de los hotfixes urgentes) y seguir obligatoriamente esta nomenclatura:

feature/<nombre-breve>: Para desarrollar nuevas funcionalidades (ej. feature/update-readme, feature/filtro-categorias).

hotfix/<nombre-breve>: Para correcciones críticas y urgentes en producción (ej. hotfix/error-precio).

💬 Mensajes de Commit

Utilizaremos la convención de Conventional Commits en minúsculas, manteniendo el uso de verbos descriptivos:

feat: Añade una nueva funcionalidad.

fix: Soluciona un error o bug.

docs: Cambios exclusivos de documentación (como este README).

ci: Cambios en archivos de configuración de integración continua (ej. GitHub Actions).

Ejemplo: docs: agrega guia de buenas practicas y convenciones de equipo

📁 Estructura de Carpetas

/components: Contiene los componentes reutilizables de UI construidos en React (Navbar, Hero, ProductCard, etc.).

/: Directorio raíz que contiene los archivos de configuración (Vite, TypeScript, Tailwind) y las definiciones de tipos (types.ts) y constantes (constants.ts).

🤝 Flujo de Revisión y Merge (Pull Requests)

Está estrictamente prohibido hacer push directo a las ramas main o develop.

Todo el código nuevo debe integrarse mediante la apertura de un Pull Request (PR).

Cada PR debe ser revisado y aprobado obligatoriamente por el otro integrante del equipo antes de ejecutar el merge.

💻 Run Locally (Desarrollo Local)

Prerequisites: Node.js (v20 o superior recomendado).

Install dependencies:

npm install

Set the GEMINI_API_KEY in .env.local to your Gemini API key (si aplica para funciones de IA).

Run the app:

npm run dev
