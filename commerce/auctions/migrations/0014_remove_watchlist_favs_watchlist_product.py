# Generated by Django 4.1.2 on 2022-11-16 00:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0013_watchlist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='watchlist',
            name='favs',
        ),
        migrations.AddField(
            model_name='watchlist',
            name='product',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='product_fav', to='auctions.actions'),
        ),
    ]