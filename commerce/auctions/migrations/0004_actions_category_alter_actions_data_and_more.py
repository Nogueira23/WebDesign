# Generated by Django 4.1.2 on 2022-11-01 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0003_actions_data_actions_describe_actions_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='actions',
            name='category',
            field=models.CharField(default=None, max_length=64),
        ),
        migrations.AlterField(
            model_name='actions',
            name='data',
            field=models.DateField(default=None),
        ),
        migrations.AlterField(
            model_name='actions',
            name='describe',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='actions',
            name='image',
            field=models.CharField(default=None, max_length=300),
        ),
    ]
