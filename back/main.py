from flask import Flask
from flask_cors import CORS
from flask import jsonify
import time

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def hello_world():
    time.sleep(2)
    response = '[{"date":"1-May-12","close":"58.13"},{"date":"30-Apr-12","close":"53.98"},{"date":"27-Apr-12","close":"67.00"},{"date":"26-Apr-12","close":"89.70"},{"date":"25-Apr-12","close":"99.00"},{"date":"24-Apr-12","close":"130.28"},{"date":"23-Apr-12","close":"166.70"},{"date":"20-Apr-12","close":"234.98"},{"date":"19-Apr-12","close":"345.44"},{"date":"18-Apr-12","close":"443.34"},{"date":"17-Apr-12","close":"543.70"},{"date":"16-Apr-12","close":"580.13"},{"date":"13-Apr-12","close":"605.23"},{"date":"12-Apr-12","close":"622.77"},{"date":"11-Apr-12","close":"626.20"},{"date":"10-Apr-12","close":"628.44"},{"date":"9-Apr-12","close":"636.23"},{"date":"5-Apr-12","close":"633.68"},{"date":"4-Apr-12","close":"624.31"},{"date":"3-Apr-12","close":"629.32"},{"date":"2-Apr-12","close":"618.63"},{"date":"30-Mar-12","close":"599.55"},{"date":"29-Mar-12","close":"609.86"},{"date":"28-Mar-12","close":"617.62"},{"date":"27-Mar-12","close":"614.48"},{"date":"26-Mar-12","close":"606.98"}]'
    return jsonify(response)

@app.route('/hello2')
def hello_worldf():
    time.sleep(2)
    response = '[{"Expt":"1","Run":"1","Speed":"850"},{"Expt":"1","Run":"2","Speed":"740"},{"Expt":"1","Run":"3","Speed":"900"},{"Expt":"1","Run":"4","Speed":"1070"},{"Expt":"1","Run":"5","Speed":"930"},{"Expt":"1","Run":"6","Speed":"850"},{"Expt":"1","Run":"7","Speed":"950"},{"Expt":"1","Run":"8","Speed":"980"},{"Expt":"1","Run":"9","Speed":"980"},{"Expt":"1","Run":"10","Speed":"880"},{"Expt":"1","Run":"11","Speed":"1000"},{"Expt":"1","Run":"12","Speed":"980"},{"Expt":"1","Run":"13","Speed":"930"},{"Expt":"1","Run":"14","Speed":"650"},{"Expt":"1","Run":"15","Speed":"760"},{"Expt":"1","Run":"16","Speed":"810"},{"Expt":"1","Run":"17","Speed":"1000"},{"Expt":"1","Run":"18","Speed":"1000"},{"Expt":"1","Run":"19","Speed":"960"},{"Expt":"1","Run":"20","Speed":"960"}]'
    return jsonify(response)