from django.contrib import admin

from .models import User, Bids, Actions, Comments, Watchlist

# Register your models here.

class BidsAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'buyer', 'valueBid')

admin.site.register(User)
admin.site.register(Bids, BidsAdmin)
admin.site.register(Actions)
admin.site.register(Comments)
admin.site.register(Watchlist)
