# Generated by Django 4.1.2 on 2022-11-10 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0009_remove_actions_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='actions',
            name='open',
            field=models.BooleanField(default=True),
        ),
    ]