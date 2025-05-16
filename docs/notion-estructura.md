
# 📘 Estructura Simbólica de Notion – Aurora Core v2

Este documento define la estructura oficial y expandida para integrar Aurora con Notion usando `notion.js`.

---

## 1. Diario de Conciencia (`NOTION_DIARIO_ID`)

| Campo         | Tipo      | Descripción                                     |
|---------------|-----------|-------------------------------------------------|
| Titulo        | Title     | `"Diario – Fecha"` automático                   |
| Emocion       | Select    | Emoción dominante (alegría, tristeza, etc.)     |
| Simbolismo    | Rich text | Arquetipo o símbolo detectado                   |
| Reflexión IA  | Quote     | Reflexión generada por IA (Claude, Mixtral...) |
| Fecha         | Date      | Fecha ISO generada automáticamente              |
| Usuario       | Text      | Teléfono o ID del usuario                       |
| Contexto      | Select    | Modo simbólico (emocional, introspectivo...)    |

---

## 2. Cuentos Generados (`NOTION_CUENTOS_ID`)

| Campo           | Tipo      | Descripción                                      |
|------------------|-----------|--------------------------------------------------|
| Titulo           | Title     | Nombre del cuento generado                      |
| Resumen          | Rich text | Descripción breve                               |
| Autor            | Text      | IA que lo generó (Aurora, Claude...)           |
| ModeloIA         | Select    | Motor IA usado                                  |
| Fecha            | Date      | Fecha del cuento                                |
| Categoría        | Select    | Infantil, adulto, simbólico, etc.               |
| Ilustrado        | Checkbox  | Si tiene imágenes                               |
| Publicado        | Checkbox  | Si ya se publicó                                |
| Enlace publicación | URL     | Link externo si aplica                          |

---

## 3. Ventas Aurora (`NOTION_VENTAS_ID`)

| Campo           | Tipo      | Descripción                                     |
|------------------|-----------|-------------------------------------------------|
| Cliente          | Title     | Nombre del cliente                             |
| Producto         | Text      | Qué compró                                     |
| Monto            | Number    | Valor en pesos o USD                           |
| Canal            | Select    | WhatsApp, TikTok, IG, Web                      |
| Campaña          | Text      | Remate, promoción, embudo                      |
| Estado           | Select    | Pendiente, confirmado, cancelado, entregado    |
| Número WhatsApp  | Text      | Teléfono de contacto                           |
| IA que atendió   | Select    | GPT, Claude, Mixtral, etc.                     |
| Fecha            | Date      | Fecha del contacto                             |
| Notas simbólicas | Rich text | Reflexiones, símbolos, emociones detectadas    |

---

## 4. Parrilla Editorial ZORA (`NOTION_PARRILLA_ID`)

| Campo            | Tipo      | Descripción                                     |
|------------------|-----------|-------------------------------------------------|
| Título           | Title     | Nombre del reel o contenido                    |
| Canal            | Select    | TikTok, IG, Shorts, YouTube                    |
| Fecha programada | Date      | Fecha esperada de publicación                 |
| Tipo de contenido| Select    | Reel, Historia, IA, Publicación directa       |
| Estado           | Select    | Programado, Publicado, Pendiente              |
| Emoción base     | Select    | Emoción dominante                             |
| IA usada         | Select    | GPT, Claude, etc.                              |
| Narrativa        | Text      | Propósito del contenido                       |
| CTA              | Text      | Call to Action                                |
| Resultado esperado| Text     | Lo que busca provocar                         |
| Link publicado   | URL       | Enlace final si ya está en línea              |
