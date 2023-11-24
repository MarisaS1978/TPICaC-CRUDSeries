from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend

# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/catalogo'
# URI de la BBDD                          driver de la BD  user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app)   #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app)   #crea el objeto ma de de la clase Marshmallow

# defino las tablas
class Series(db.Model):   # la clase Serie hereda de db.Model    
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    titulo=db.Column(db.String(100))
    genero=db.Column(db.String(50))
    temporadas=db.Column(db.Integer)
    clasificacion=db.Column(db.String(50))
    anio=db.Column(db.Integer)
    imagen=db.Column(db.String(400))
    def __init__(self,titulo,genero,temporadas,clasificacion,anio,imagen):   #crea el  constructor de la clase
        self.titulo=titulo   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.genero=genero
        self.temporadas=temporadas
        self.clasificacion=clasificacion
        self.anio=anio
        self.imagen=imagen


   


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
class catalogo(ma.Schema):
    class Meta:
        fields=('id','titulo','genero','temporadas','clasificacion','anio','imagen')


serie_schema=catalogo()            # El objeto serie_schema es para traer una serie
series_schema=catalogo(many=True)  # El objeto series_schema es para traer multiples registros de series


# crea los endpoint o rutas (json)
@app.route('/series',methods=['GET'])
def get_Series():
    all_series=Series.query.all()         # el metodo query.all() lo hereda de db.Model
    result=series_schema.dump(all_series)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla


@app.route('/series/<id>', methods=['GET'])
def get_serie(id):
    serie = Series.query.get(id)
    return serie_schema.jsonify(serie) # retorna el JSON de una serie recibida como parametro


@app.route('/series/<id>', methods=['DELETE'])
def delete_serie(id):
    serie = Series.query.get(id)
    db.session.delete(serie)
    db.session.commit()
    
    # Return a list containing the deleted Serie object
    return series_schema.jsonify([serie])


@app.route('/series', methods=['POST'])
def create_serie():
    titulo = request.json['titulo']
    genero = request.json['genero']
    temporadas = request.json['temporadas']
    clasificacion = request.json['clasificacion']
    anio = request.json['anio']
    imagen = request.json['imagen']
    
    new_serie = Series(titulo, genero, temporadas, clasificacion, anio, imagen)
    db.session.add(new_serie)
    db.session.commit()

    # Return a list containing the newly created Serie object
    return series_schema.jsonify([new_serie])

@app.route('/series/<id>', methods=['PUT'])
def update_serie(id):
    serie = Series.query.get(id)

    serie.titulo = request.json['titulo']
    serie.genero = request.json['genero']
    serie.temporadas = request.json['temporadas']
    serie.clasificacion = request.json['clasificacion']
    serie.anio = request.json['anio']
    serie.imagen = request.json['imagen']

    db.session.commit()
    return serie_schema.jsonify(serie)


# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)    # ejecuta el servidor Flask en el puerto 5000
