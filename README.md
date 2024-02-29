from flask import Flask,jsonify
import sqlite3
from sqlite3 import Error
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

def dict_factory(cursor, row):
    return dict((col[0], value) for col, value in zip(cursor.description, row))

@cross_origin
@app.route("/turma_aluno",methods=["GET"])
def buscar_todos_funcionarios():
    try:
        banco = sqlite3.connect("C://Users//Adriana//Desktop//projeto_api//database.db")
        banco.row_factory = dict_factory
        cursor = banco.cursor()
        cursor.execute("SELECT id_turma as Turma, COUNT(id_aluno) as Alunos from turma_aluno GROUP by id_turma")
        resultado = cursor.fetchall()
        return jsonify(resultado)
    except:
        print("Erro: ",Error)

if __name__ == "__main__":
    app.run(port=5000,host="localhost")
