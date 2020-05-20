from django.http import JsonResponse
import json, time, urllib.request
import pandas as pd

# https://github.com/CSSEGISandData/COVID-19
# https://github.com/turicas/covid19-br
# https://brasil.io/api/dataset/covid19/
def globalCases(request):
    # Confirmed cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    dataConfirmed = pd.read_csv(url)
    dataConfirmed = dataConfirmed.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    dataConfirmed = dataConfirmed.sum(axis=0)

    #Death cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
    dataDeaths = pd.read_csv(url)
    dataDeaths = dataDeaths.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    dataDeaths = dataDeaths.sum(axis=0)

    #Recovered cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"
    dataRecovered = pd.read_csv(url)
    dataRecovered = dataRecovered.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    dataRecovered = dataRecovered.sum(axis=0)

    #-------------------------
    d = {'date': dataConfirmed.index.tolist(), 'confirmed': dataConfirmed.values.tolist(), 'deaths': dataDeaths.values.tolist(), 'recovered': dataRecovered.values.tolist()}
    data = pd.DataFrame(data=d)

    resp = json.loads(data.to_json(orient='records'))
    return JsonResponse(resp, safe=False)

def brasilCases(request):
    # Confirmed cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    dataConfirmed = pd.read_csv(url)
    dataConfirmed = dataConfirmed.loc[dataConfirmed["Country/Region"] == "Brazil"]
    dataConfirmed = dataConfirmed.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    dataConfirmed = dataConfirmed.sum(axis=0)
    
    #Death cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
    dataDeaths = pd.read_csv(url)
    dataDeaths = dataDeaths.loc[dataDeaths["Country/Region"] == "Brazil"]
    dataDeaths = dataDeaths.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    dataDeaths = dataDeaths.sum(axis=0)

    #Recovered cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"
    dataRecovered = pd.read_csv(url)
    dataRecovered = dataRecovered.loc[dataRecovered["Country/Region"] == "Brazil"]
    dataRecovered = dataRecovered.drop(columns=['Province/State', 'Country/Region', 'Lat', 'Long'])
    dataRecovered = dataRecovered.sum(axis=0)

    #-------------------------
    d = {'date': dataConfirmed.index.tolist(), 'confirmed': dataConfirmed.values.tolist(), 'deaths': dataDeaths.values.tolist(), 'recovered': dataRecovered.values.tolist()}
    data = pd.DataFrame(data=d)

    resp = json.loads(data.to_json(orient='records'))
    return JsonResponse(resp, safe=False)

def toptenconfirmed(request):
    # Confirmed cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    dataConfirmed = pd.read_csv(url)
    dataConfirmed = dataConfirmed.drop(columns=['Province/State','Lat', 'Long'])
    col = dataConfirmed['Country/Region']
    col = col.to_numpy()
    col = list(dict.fromkeys(col))

    data = []
    for c in col:
        d = dataConfirmed.loc[dataConfirmed["Country/Region"] == c]
        d = d.drop(columns=['Country/Region']).sum(axis=0)
        if (c == 'Diamond Princess'):
            continue
        if (c == 'Czechia'):
            c = 'Czech'
        if (c == 'Korea, South'):
            c = 'Korea (Republic of)'
        if (c == 'Taiwan*'):
            c = 'Taiwan'
        if (c == 'US'):
            c = 'USA'
        
        try:
            response = urllib.request.urlopen('https://restcountries.eu/rest/v2/name/' + c.replace(" ", "%20"))
        except:
            response = urllib.request.urlopen('https://restcountries.eu/rest/v2/name/' + c.split(" ", 1)[0])
        countryInfo = json.loads(response.read())
        d = d.values.tolist()
        country = {'Region': countryInfo[0]['region'], 'Country': c, 'value': d[len(d)-1]}
        data.append(country)
    
    data = sorted(data, key=lambda k: k['value'], reverse=True)[:10]
    data = pd.DataFrame(data=data)

    resp = json.loads(data.to_json(orient='records'))
    return JsonResponse(resp, safe=False)

def worldregions(request):
    # Confirmed cases
    url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    dataConfirmed = pd.read_csv(url)
    dataConfirmed = dataConfirmed.drop(columns=['Province/State','Lat', 'Long'])
    col = dataConfirmed['Country/Region']
    col = col.to_numpy()
    col = list(dict.fromkeys(col))

    data = {}
    for c in col:
        d = dataConfirmed.loc[dataConfirmed["Country/Region"] == c]
        d = d.drop(columns=['Country/Region']).sum(axis=0)
        if (c == 'Diamond Princess'):
            continue
        if (c == 'Czechia'):
            c = 'Czech'
        if (c == 'Korea, South'):
            c = 'Korea (Republic of)'
        if (c == 'Taiwan*'):
            c = 'Taiwan'
        if (c == 'US'):
            c = 'United States of America'
        
        try:
            response = urllib.request.urlopen('https://restcountries.eu/rest/v2/name/' + c.replace(" ", "%20"))
        except:
            response = urllib.request.urlopen('https://restcountries.eu/rest/v2/name/' + c.split(" ", 1)[0])
        countryInfo = json.loads(response.read())
        d = d.values.tolist()
        if data.get(countryInfo[0]['region']):
            data[countryInfo[0]['region']] = data[countryInfo[0]['region']] + d[len(d)-1]
        else:
            data[countryInfo[0]['region']] = d[len(d)-1]
    
    data = {k: v for k, v in sorted(data.items(), key=lambda item: item[1], reverse=True)}

    resp = []
    for key in data:
        resp.append({'Region': key, 'value': data[key]})
    
    data = pd.DataFrame(data=resp)

    resp = json.loads(data.to_json(orient='records'))
    return JsonResponse(resp, safe=False)

def hellodois(request):
    resp = eval('[{"Expt":"1","Run":"1","Speed":"850"},{"Expt":"1","Run":"2","Speed":"740"},{"Expt":"1","Run":"3","Speed":"900"},{"Expt":"1","Run":"4","Speed":"1070"},{"Expt":"1","Run":"5","Speed":"930"},{"Expt":"1","Run":"6","Speed":"850"},{"Expt":"1","Run":"7","Speed":"950"},{"Expt":"1","Run":"8","Speed":"980"},{"Expt":"1","Run":"9","Speed":"980"},{"Expt":"1","Run":"10","Speed":"880"},{"Expt":"1","Run":"11","Speed":"1000"},{"Expt":"1","Run":"12","Speed":"980"},{"Expt":"1","Run":"13","Speed":"930"},{"Expt":"1","Run":"14","Speed":"650"},{"Expt":"1","Run":"15","Speed":"760"},{"Expt":"1","Run":"16","Speed":"810"},{"Expt":"1","Run":"17","Speed":"1000"},{"Expt":"1","Run":"18","Speed":"1000"},{"Expt":"1","Run":"19","Speed":"960"},{"Expt":"1","Run":"20","Speed":"960"}]')
    time.sleep(3)
    return JsonResponse(resp, safe=False)
