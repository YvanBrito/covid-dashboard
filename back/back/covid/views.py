from django.http import JsonResponse
import json, time
import pandas as pd


def globalConfirmed(request):
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    data = pd.read_csv(url)
    data = data.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    data = data.sum(axis=0)

    d = {'date': data.index.tolist(), 'confirmed': data.values.tolist()}
    data = pd.DataFrame(data=d)

    resp = json.loads(data.to_json(orient='records'))
    return JsonResponse(resp, safe=False)

def hellodois(request):
    time.sleep(3)
    resp = eval('[{"Expt":"1","Run":"1","Speed":"850"},{"Expt":"1","Run":"2","Speed":"740"},{"Expt":"1","Run":"3","Speed":"900"},{"Expt":"1","Run":"4","Speed":"1070"},{"Expt":"1","Run":"5","Speed":"930"},{"Expt":"1","Run":"6","Speed":"850"},{"Expt":"1","Run":"7","Speed":"950"},{"Expt":"1","Run":"8","Speed":"980"},{"Expt":"1","Run":"9","Speed":"980"},{"Expt":"1","Run":"10","Speed":"880"},{"Expt":"1","Run":"11","Speed":"1000"},{"Expt":"1","Run":"12","Speed":"980"},{"Expt":"1","Run":"13","Speed":"930"},{"Expt":"1","Run":"14","Speed":"650"},{"Expt":"1","Run":"15","Speed":"760"},{"Expt":"1","Run":"16","Speed":"810"},{"Expt":"1","Run":"17","Speed":"1000"},{"Expt":"1","Run":"18","Speed":"1000"},{"Expt":"1","Run":"19","Speed":"960"},{"Expt":"1","Run":"20","Speed":"960"}]')
    return JsonResponse(resp, safe=False)
