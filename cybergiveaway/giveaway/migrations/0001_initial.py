# Generated by Django 3.1.5 on 2021-02-02 16:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Giveaway',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('description', models.TextField(max_length=600, verbose_name='Description')),
                ('cost', models.IntegerField(default=0, verbose_name='Cost')),
                ('image', models.FileField(upload_to='images/giveaways')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_archived', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('cost', models.IntegerField(default=0, verbose_name='Cost')),
                ('description', models.TextField(blank=True, max_length=600, verbose_name='Description')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('giveaway', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='item', to='giveaway.giveaway')),
            ],
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField(verbose_name='Number')),
                ('giveaway', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participants', to='giveaway.giveaway')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participants', to='accounts.profile')),
            ],
        ),
        migrations.CreateModel(
            name='ItemImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(upload_to='images/items')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='giveaway.item')),
            ],
        ),
    ]
