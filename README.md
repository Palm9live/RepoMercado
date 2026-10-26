# MercadoVecino

App móvil híbrida de pedidos de productos de mercado a tiendas de barrio, de la empresa ficticia Frescos del Istmo S.A. Proyecto integrador de Desarrollo de Aplicaciones Móviles (EID 1022), ITSE.

Construida con **Ionic + Angular** (starter `sidemenu`) y **Firebase**. Ya están integrados Authentication y Cloud Firestore; Storage, Cloud Messaging y Hosting están pendientes.

## Requisitos

- Node.js >= 20
- Git
- pnpm (`npm i -g pnpm`). Este proyecto usa pnpm; no uses npm.
- Ionic CLI (`npm i -g @ionic/cli`)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Palm9live/MercadoVecino.git
cd MercadoVecino
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Copia las plantillas de configuración:
   - `src/environments/environment.example.ts` a `src/environments/environment.ts`
   - `src/environments/environment.prod.example.ts` a `src/environments/environment.prod.ts`

4. Rellena ambos archivos con la configuración de Firebase (consola de Firebase, Configuración del proyecto, Tus apps).

## Ejecutar en desarrollo

```bash
ionic serve
```

La app se abre en `http://localhost:8100`.

## Scripts

| Comando          | Descripción                         |
|------------------|-------------------------------------|
| `pnpm start`     | Servidor de desarrollo (`ng serve`) |
| `pnpm build`     | Build de producción (`ng build`)    |
| `pnpm test`      | Tests unitarios (`ng test`)         |
| `pnpm lint`      | Lint del código (`ng lint`)         |

## Estructura

```
src/
├── app/
│   ├── services/     # Servicios (Auth, Firestore)
│   ├── folder/       # Página del starter (se reemplaza al armar la navegación)
│   ├── components/   # Pendiente: componentes reutilizables
│   ├── pages/        # Pendiente: páginas (login, home, catalog, orders)
│   ├── models/       # Pendiente: interfaces y tipos
│   └── guards/       # Pendiente: guards de rutas
├── assets/
├── theme/
└── environments/     # Configuración de Firebase (solo las plantillas .example.ts están en el repo)
docs/                 # Pendiente de fusión: diagrama ER y diccionario de datos
```

## Seguridad

- `environment.ts` y `environment.prod.ts` contienen la configuración de Firebase y **no se suben al repositorio** (están en `.gitignore`). Solo se suben las plantillas `.example.ts`, con valores vacíos.
- Nunca subas claves, credenciales ni archivos `.env`.
- El acceso a los datos se controlará con reglas de seguridad de Firestore (`firestore.rules`, en desarrollo).

## Flujo de trabajo

- La rama `main` está protegida: los cambios entran solo por Pull Request.
- Cada funcionalidad va en su rama `feature/nombre-en-ingles`.
- Cada Pull Request lo revisa otro integrante del equipo.
- Los commits usan prefijos: `feat:`, `fix:`, `docs:`, `chore:`.

## Equipo

- Bryan Rodriguez
- Oliver
- Joao