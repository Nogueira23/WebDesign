# Generated by Django 4.1.2 on 2022-11-02 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0004_actions_category_alter_actions_data_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='actions',
            name='number_bids',
            field=models.IntegerField(default=0),
        ),
    ]
