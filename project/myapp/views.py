from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.views.generic.base import TemplateView
from django.views.generic import FormView
from .models import Search
from .forms import SearchForm
import json
import requests
from django.urls import reverse_lazy
from django.http import QueryDict
from django.views.generic.detail import DetailView
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def hello(request):
    return HttpResponse('Hello World!')


class Home(TemplateView):
    template_name = 'myapp/home.html'


SEARCH_URL = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&applicationId' \
             '=1003118371091832102 '


def get_api_data(params):
    api = requests.get(SEARCH_URL, params=params).text
    result = json.loads(api)
    items = result["Items"]
    return items


class IndexView(FormView):
    # model = Search
    template_name = "myapp/index.html"
    form_class = SearchForm

    def form_valid(self, form):
        keyword = form.cleaned_data['title']
        params = {
            'keyword': keyword,  # maybe add お土産 keyword automatically here??
            'hits': 30,
        }
        items = get_api_data(params)
        item_data = []
        for i in items:
            item = i['Item']
            itemName = item['itemName']
            image = item['mediumImageUrls'][0]['imageUrl']
            query = {
                'title': itemName,
                'image': image
            }
            item_data.append(query)

        return render(self.request, 'myapp/result.html', {
            'item_data': item_data,
            'keyword': keyword
        })


def cors_test(request):
    response = JsonResponse({'message': 'CORS test successful'})
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Access-Control-Allow-Credentials"] = "true"
    return response


def test2(request):
    params = {
        'keyword': 'お土産',  # maybe add お土産 keyword automatically here??
        'hits': 30,
    }
    items = get_api_data(params)
    item_data = []
    for i in items:
        item = i['Item']
        itemName = item['itemName']
        image = item['mediumImageUrls'][0]['imageUrl']
        price = item['itemPrice']
        query = {
            'title': itemName,
            'image': image,
            'price': price
        }
        item_data.append(query)

    return JsonResponse({
        'item_data': item_data,
        'keyword': 'お土産'
    })


@csrf_exempt
def test3(request):
    if request.method == 'POST':
        # Get the selected region from the POST data

        data = json.loads(request.body.decode('utf-8'))
        selected_region = data.get('region')

        # Do something with the selected region, such as storing it in the session or processing it
        params = {
            'keyword': selected_region + 'お土産',
            'hits': 30,
            'sort': '-reviewCount',
        }
        items = get_api_data(params)
        item_data = []
        for i in items:
            item = i['Item']
            itemName = item['itemName']
            image = item['mediumImageUrls'][0]['imageUrl']
            price = item['itemPrice']
            reviewAverage = item['reviewAverage']
            itemUrl = item['itemUrl']
            query = {
                'title': itemName,
                'image': image,
                'price': price,
                'reviewAverage': reviewAverage,
                'itemUrl': itemUrl
            }
            item_data.append(query)
        # Return a JsonResponse if needed
        return JsonResponse({'status': 'success', 'region': selected_region, 'item_data': item_data, })
    # elif request.method == 'GET':
    #     return JsonResponse({'status': 'test', 'region': selected_region})

    # Handle other HTTP methods or invalid requests
    return JsonResponse({'status': 'error', 'message': 'Invalid request'})
