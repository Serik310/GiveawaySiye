# Generated by Django 3.1.5 on 2021-02-04 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('giveaway', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='giveaway',
            name='image',
            field=models.FileField(upload_to='media/images/giveaways'),
        ),
        migrations.AlterField(
            model_name='itemimage',
            name='images',
            field=models.ImageField(upload_to='media/images/items'),
        ),
    ]