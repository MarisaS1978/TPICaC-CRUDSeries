 <p align="center">
  <a href="#español">🇦🇷 Español</a> |
  <a href="#english">🇬🇧 English</a>
</p>

---

<a id="español"></a>

# 📺 CRUD Series — API REST de catálogo de series

**Proyecto Full Stack desarrollado con Python, Flask y MySQL.**

Este proyecto consiste en una aplicación para administrar un catálogo de series mediante una API REST. Permite consultar, registrar, modificar y eliminar información de series, utilizando operaciones CRUD (Create, Read, Update, Delete).

Fue desarrollado como Trabajo Práctico Integrador Final del programa **Codo a Codo – Full Stack Python 2023**, Comisión 23535.

## 🎯 Objetivo del proyecto

Desarrollar una API REST que permita gestionar un catálogo de series y conectar el backend con una interfaz frontend.

El proyecto aplica conceptos de programación backend, persistencia de datos, diseño de endpoints y comunicación entre aplicaciones.

## 🛠️ Tecnologías utilizadas

| Tecnología | Aplicación |
|---|---|
| Python | Lenguaje de programación |
| Flask | Desarrollo de la API REST |
| Flask-SQLAlchemy | Modelado y acceso a la base de datos |
| Flask-Marshmallow | Serialización de datos |
| Flask-CORS | Comunicación entre frontend y backend |
| MySQL | Base de datos relacional |
| PyMySQL | Conexión entre Python y MySQL |

## ⚙️ Funcionalidades

La API permite realizar las operaciones principales de gestión de series:

- **Create:** registrar una nueva serie.
- **Read:** consultar todas las series o buscar una por su identificador.
- **Update:** modificar los datos de una serie.
- **Delete:** eliminar una serie del catálogo.

### 📋 Datos de cada serie

Cada registro contempla los siguientes campos:

- ID
- Título
- Género
- Cantidad de temporadas
- Clasificación
- Año
- Imagen

## 🔌 Endpoints de la API

La API utiliza el recurso `/series` y responde con información en formato JSON.

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/series` | Obtener todas las series |
| GET | `/series/<id>` | Obtener una serie por ID |
| POST | `/series` | Crear una nueva serie |
| PUT | `/series/<id>` | Actualizar una serie |
| DELETE | `/series/<id>` | Eliminar una serie |

### Ejemplo de estructura JSON

```json
{
  "titulo": "Nombre de la serie",
  "genero": "Drama",
  "temporadas": 3,
  "clasificacion": "13+",
  "anio": 2023,
  "imagen": "https://ejemplo.com/imagen.jpg"
}
```

## 📂 Estructura del repositorio

```text
TPICaC-CRUDSeries/
│
├── FrontEndCatalogo/
│
├── app.py
│
└── README.md
```

### Backend

El archivo `app.py` contiene:

- Configuración de Flask y CORS.
- Conexión a MySQL mediante SQLAlchemy.
- Modelo `Series`.
- Esquema de serialización con Marshmallow.
- Definición de rutas y operaciones CRUD.
- Inicialización de la aplicación en el puerto 5000.

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/MarisaS1978/TPICaC-CRUDSeries.git
cd TPICaC-CRUDSeries
```

### 2. Crear un entorno virtual

```bash
python -m venv venv
```

Activar en Windows:

```bash
venv\Scripts\activate
```

### 3. Instalar dependencias

```bash
pip install flask flask-cors flask-sqlalchemy flask-marshmallow marshmallow-sqlalchemy pymysql
```

### 4. Configurar MySQL

Crear una base de datos llamada `catalogo` en MySQL.

La configuración de conexión del código original utiliza:

```python
mysql+pymysql://root:root@localhost/catalogo
```

Es necesario adaptar el usuario, la contraseña y los datos de conexión a la configuración local.

### 5. Ejecutar el servidor

```bash
python app.py
```

La API queda disponible localmente en:

```text
http://localhost:5000
```

## 📚 Aprendizajes y conocimientos aplicados

- Desarrollo de APIs REST con Python y Flask.
- Implementación de operaciones CRUD.
- Modelado de datos relacionales con MySQL.
- Integración de SQLAlchemy y Marshmallow.
- Comunicación entre frontend y backend mediante JSON.
- Organización de un proyecto Full Stack.

## 👥 Equipo de desarrollo

Trabajo realizado en equipo:

- Alfredo Gomez
- Hebert Purizaca
- Marisa Silvina Sandroni

**Docente:** Marcela Cerdá  
**Programa:** Codo a Codo — Full Stack Python 2023  
**Comisión:** 23535

## 👩‍💻 Autora

**Marisa Silvina Sandroni**

- [GitHub](https://github.com/MarisaS1978)
- [LinkedIn](https://www.linkedin.com/in/marisa-silvina-sandroni/)

---

<a id="english"></a>

# 📺 CRUD Series — TV Series Catalog REST API

**Full Stack project developed with Python, Flask, and MySQL.**

This project is an application for managing a TV series catalog through a REST API. It allows users to retrieve, create, update, and delete series information using CRUD operations (Create, Read, Update, Delete).

It was developed as the final integrative project for the **Codo a Codo – Full Stack Python 2023** program, Commission 23535.

## 🎯 Project Objective

Develop a REST API to manage a TV series catalog and connect the backend to a frontend interface.

The project applies backend programming, data persistence, endpoint design, and application communication concepts.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Programming language |
| Flask | REST API development |
| Flask-SQLAlchemy | Database modeling and access |
| Flask-Marshmallow | Data serialization |
| Flask-CORS | Frontend and backend communication |
| MySQL | Relational database |
| PyMySQL | Python-to-MySQL connection |

## ⚙️ Features

The API supports the main operations for managing TV series:

- **Create:** add a new series.
- **Read:** retrieve all series or search for one by ID.
- **Update:** modify a series' information.
- **Delete:** remove a series from the catalog.

### 📋 Series Data

Each record includes the following fields:

- ID
- Title
- Genre
- Number of seasons
- Rating
- Release year
- Image

## 🔌 API Endpoints

The API uses the `/series` resource and returns information in JSON format.

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/series` | Retrieve all series |
| GET | `/series/<id>` | Retrieve a series by ID |
| POST | `/series` | Create a new series |
| PUT | `/series/<id>` | Update a series |
| DELETE | `/series/<id>` | Delete a series |

### JSON Structure Example

```json
{
  "titulo": "Series title",
  "genero": "Drama",
  "temporadas": 3,
  "clasificacion": "13+",
  "anio": 2023,
  "imagen": "https://example.com/image.jpg"
}
```

## 📂 Repository Structure

```text
TPICaC-CRUDSeries/
│
├── FrontEndCatalogo/
│
├── app.py
│
└── README.md
```

### Backend

The `app.py` file contains:

- Flask and CORS configuration.
- MySQL connection through SQLAlchemy.
- `Series` data model.
- Marshmallow serialization schema.
- API routes and CRUD operations.
- Application initialization on port 5000.

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/MarisaS1978/TPICaC-CRUDSeries.git
cd TPICaC-CRUDSeries
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install flask flask-cors flask-sqlalchemy flask-marshmallow marshmallow-sqlalchemy pymysql
```

### 4. Configure MySQL

Create a database named `catalogo` in MySQL.

The original source code uses the following connection configuration:

```python
mysql+pymysql://root:root@localhost/catalogo
```

Update the username, password, and connection details according to your local environment.

### 5. Run the server

```bash
python app.py
```

The API will be available locally at:

```text
http://localhost:5000
```

## 📚 Skills and Concepts Applied

- REST API development with Python and Flask.
- CRUD operations implementation.
- Relational data modeling with MySQL.
- SQLAlchemy and Marshmallow integration.
- Frontend and backend communication using JSON.
- Full Stack project organization.

## 👥 Development Team

Collaborative project developed by:

- Alfredo Gomez
- Hebert Purizaca
- Marisa Silvina Sandroni

**Instructor:** Marcela Cerdá  
**Program:** Codo a Codo — Full Stack Python 2023  
**Commission:** 23535

## 👩‍💻 Author

**Marisa Silvina Sandroni**

- [GitHub](https://github.com/MarisaS1978)
- [LinkedIn](https://www.linkedin.com/in/marisa-silvina-sandroni/)

---
