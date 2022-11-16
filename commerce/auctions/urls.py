from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path('create', views.create, name='create'),
    path('listing/<str:id_product>/', views.listing, name='listing'),
    path('close/<str:id_product>/', views.close, name='close'),
    path('comment/<str:id_product>/', views.comment, name='comment'),
    path('watchlist/<str:user_id>/', views.watchlist, name='watchlist'),
    path('watchlist_add/<str:id_user>/', views.watchlist_add, name='watchlist_add'),
    path('catogories/', views.categories, name='categories'),
    path('category_select/<str:category>/', views.category_select, name='category_select'),
    path('index_category/<str:category>', views.index_category, name='index_category')
]
