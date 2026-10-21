# Diccionario de datos

## categories
Categorias que clasifican los productos del catalogo 
**ID DEL DOCUMENTO:** autogenerado por Firestore

***

| Campo | Tipo | Requerido | Description | Restricciones |
|---|---|---|---|---|
| `name` | string | Si | Nombre visible de la categoria en el catalogo | No vacio |
| `description` | string | no | Texto breve que explica que producto incluye | Opcional, puede quedar vacio 

***

**Quien puede modificar:** Lectura publica; solo el admin crea, edita y elimina

## products
Productos que ofrece cada tienda
**ID DEL DOCUMENTO:** autogenerado pro Firestore

***

| Campo | Tipo | Requerido | Description | Restricciones |
|---|---|---|---|---|
| `store_id` | string | Si | ID de la tienda duena del producto | Debe existir en 'stores'; no cambia |
| `category_id` | string | Si | ID de la categoria del producto | debe existir en 'categories' | 
| `name` | string | Si | Nombre visible del producto | No vacio |
| `price` | number | Si | Precio unitario actual | Mayor o igual a 0 | 
| `stock` | number | Si | Unidades disponibles | Entero Mayor o igual a 0 | 
| `image_url` | string | No | URL de la foto en firebase Storage | Puede quedar vacia |

***

**Quien puede modificar:** Lectura publica; solo el comerciante dueno de la tienda(el admin tambien puede), crea edita y elimina

## orders

Pedidos que realiza un cliente a una tienda.
**ID DEL DOCUMENTO:** autogenerado pro Firestore

***

| Campo | Tipo | Requerido | Description | Restricciones |
|---|---|---|---|---|
| `customer_user_id` | string | Sí | ID del cliente que hizo el pedido | Debe existir en `users`; no cambia |
| `store_id` | string | Sí | ID de la tienda que recibe el pedido | Debe existir en `stores`; no cambia |
| `status` | string | Si | Estado actual del pedido | `pending`, `preparing`, `on_the_way`, `delivered` o `cancelled`; nace en `pending` |
| `total` | number | Si | Total del pedido al momento de crearlo | Mayor o igual a 0 |
| `created_at` | timestamp | Si | Fecha y hora de creacion del pedido | Se asigna al crear; no cambia |

***

**Ciclo de estados:** `pending` → `preparing` → `on_the_way` → `delivered`. Se puede pasar a `cancelled` desde `pending` o `preparing`.

**Quien puede modificar:** el cliente crea y lee sus pedidos; la tienda lee los suyos y cambia el estado; el admin accede a todos.

## order_items

Lineas de cada pedido: que producto y en que cantidad.

**ID del documento:** autogenerado por Firestore.

***

| Campo | Tipo | Requerido | Description | Restricciones |
|---|---|---|---|---|
| `order_id` | string | Si | ID del pedido al que pertenece la línea | Debe existir en `orders`; no cambia |
| `product_id` | string | Si | ID del producto pedido | Debe existir en `products` |
| `quantity` | number | Si | Cantidad pedida | Entero, mayor a 0 |
| `unit_price` | number | SI | Precio unitario al momento de la compra | Mayor o igual a 0; no cambia aunque `products.price` cambie |

***

**Quien puede modificarla:** se crea junto con el pedido; la leen el cliente del pedido, la tienda y el admin.

## users
Perfil de cada usuario de la plataforma. Los datos de acceso (correo y contraseña) los guarda Firebase Authentication.

**ID del documento:** uid de Firebase Auth.

***

| Campo | Tipo | Requerido | Description | Restricciones |
|---|---|---|---|---|
| `full_name` | string | SI | Nombre completo del usuario | No vacío |
| `role` | string | Si | Rol que define que puede hacer en la app | `customer`, `merchant` o `admin`; solo el admin puede cambiarlo |
| `photo_url` | string | No | URL de la foto de perfil en Firebase Storage | Puede quedar vacio |
| `created_at` | timestamp | Si | Fecha y hora de creacion del perfil | Se asigna al crear; no cambia |

***

**Quien puede modificarla:** cada usuario lee y edita su propio perfil (menos `role`); el admin accede a todos.

## stores

Tiendas de barrio registradas en la plataforma.

**ID del documento:** autogenerado por Firestore.

***

| Campo | Tipo | Requerido | Description | Restricciones |
|---|---|---|---|---|
| `owner_user_id` | string | Si | ID del usuario comerciante dueño de la tienda | Debe existir en `users`; no cambia después de crear la tienda |
| `name` | string | Si | Nombre visible de la tienda | No vacio |
| `address` | string | Si | Direccion fisica de la tienda | No vacio |
| `is_approved` | boolean | Si | Indica si la tienda fue aprobada para operar | Nace en `false`; solo el admin puede cambiarlo a `true` |

***

**Quien puede modificarla:** lectura publica; el dueño edita sus datos (menos `is_approved`); el admin edita todo.
