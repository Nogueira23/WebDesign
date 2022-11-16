from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Actions(models.Model):
    name = models.CharField(max_length=32)
    price = models.FloatField()
    describe = models.CharField(max_length=200, default=None)
    image = models.CharField(max_length=300, default=None)
    data = models.DateField(default=None)
    category = models.CharField(max_length=64, default=None)
    number_bids = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='UserAuthor', default=1)
    open = models.BooleanField(default=True)

    def __str__(self):
        return f'({self.name}; Price: {self.price} BRL)'

class Bids(models.Model):
    product = models.ForeignKey(Actions, on_delete=models.CASCADE, related_name='productOfBid', default=1)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='UserBuyer')
    valueBid = models.FloatField()

    def __str__(self) -> str:
        return f'Bid of {self.valueBid} by {self.buyer}'

class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    product = models.ForeignKey(Actions, on_delete=models.CASCADE, related_name='product_commented', default=1)
    comment = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f'The {self.user} commeted: {self.comment}'

class Watchlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userFavs')
    product = models.ForeignKey(Actions, on_delete=models.CASCADE, related_name='product_fav', default=1)