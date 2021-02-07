from django.db import models
from accounts.models import Profile


class Giveaway(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100)
    description = models.TextField(verbose_name='Description', max_length=600)
    cost = models.IntegerField(verbose_name='Cost', default=0)
    image = models.FileField(upload_to='media/images/giveaways')
    created_at = models.DateTimeField(auto_now_add=True)
    is_archived = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id) + ' ' + self.title


class Item(models.Model):
    title = models.CharField(verbose_name='Title', max_length=100)
    cost = models.IntegerField(verbose_name='Cost', default=0)
    description = models.TextField(verbose_name='Description', max_length=600, blank=True)
    giveaway = models.ForeignKey(Giveaway, related_name='item', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class ItemImage(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    images = models.ImageField(upload_to='media/images/items')

    def __str__(self):
        if self.item:
            return self.item.title
        return ''


class Participant(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='participants')
    giveaway = models.ForeignKey(Giveaway, on_delete=models.CASCADE, related_name='participants')
    number = models.IntegerField(verbose_name='Number')
