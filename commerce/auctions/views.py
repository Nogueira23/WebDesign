from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import User, Actions, Bids, Comments, Watchlist

from . import util


def index(request, category=None):
    return render(request, "auctions/index.html",{
        'actions':  Actions.objects.all()
    })

def create(request):
    categories = util.categories()
    if request.method == 'POST':
        name = request.POST['name']
        price = request.POST['price']
        describe = request.POST['describe']
        img = request.POST['img']
        data = request.POST['data']
        category = request.POST['category']
        author = request.POST['username']
        aux = Actions(name=name, price=price, describe=describe,
                        image=img, data=data, category=category, author=author)
        aux.save()

        return HttpResponseRedirect(reverse('index'))

    return render(request, 'auctions/create.html', {
        'categories': categories
    })

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "auctions/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "auctions/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "auctions/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "auctions/register.html")

def listing(request, id_product):
    product = Actions.objects.get(pk=id_product)
    bids = Bids.objects.all()
    if request.method == 'POST':
        valuebid = request.POST['valueBid']
        if int(valuebid) > product.price:
            user = User.objects.get(pk=int(request.POST['userid']))
            productbid = Actions.objects.get(pk=int(id_product))

            #indentificação do lance
            q = Bids(id=int(request.POST['bidid']),valueBid=valuebid, buyer=user, product=productbid)
            q.save()

            #atualizações gerais do produto
            v = Actions.objects.get(pk=id_product)
            v.price = valuebid
            v.save()
            n = Actions.objects.get(pk=id_product)
            n.number_bids += 1
            n.save()
            return HttpResponseRedirect(reverse('listing', args=(id_product,)))
        else:
            return HttpResponse('ERRO: Your bid is not higher than your current bid!')
    return render(request, "auctions/listing.html", {
        'product': product,
        'bids': Bids.objects.all(),
        'comments': Comments.objects.all()
    })

def close(request, id_product):
    product = Actions.objects.get(pk=id_product)
    product.open = False
    product.save()
    return HttpResponseRedirect(reverse('listing', args=(id_product,)))

def comment(request, id_product):
    if request.method == 'POST':
        comment = request.POST['comment']
        user = User.objects.get(pk=int(request.POST['userid']))
        product = Actions.objects.get(pk=id_product)
        comments = Comments(comment=comment, user=user, product=product)
        comments.save()
    return HttpResponseRedirect(reverse('listing', args=(id_product)))

def watchlist(request, user_id):
    watchlist_user = Watchlist.objects.filter(user=user_id)
    return render(request, 'auctions/watchlist.html', {
        'watchlist': watchlist_user,
    })

def watchlist_add(request, id_user):
    if request.method == 'POST':
        id_product = request.POST['id_product']
        user = User.objects.get(pk=int(id_user))
        product = Actions.objects.get(pk=int(id_product))
        q = Watchlist(user=user, product=product)
        q.save()
    return HttpResponseRedirect(reverse('watchlist', args=(id_user,)))

def categories(request):
    return render(request, 'auctions/categories.html', {
        'categories': util.categories()
    })

def category_select(request, category):
    return HttpResponseRedirect(reverse('index_category', args=(category,)))

def index_category(request, category):
    return render(request, 'auctions/index_category.html', {
        'actions': Actions.objects.filter(category=category)
    })