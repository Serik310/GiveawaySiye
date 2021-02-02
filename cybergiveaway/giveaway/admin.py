from django.contrib import admin
from .models import Giveaway, Participant, ItemImage, Item


class ItemImageAdmin(admin.StackedInline):
    model = ItemImage


class ItemAdmin(admin.ModelAdmin):
    inlines = [ItemImageAdmin]
    list_display = ('title', 'description', 'cost', 'giveaway')
    search_fields = ('title', 'giveaway')


class GiveawayAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'cost')
    search_fields = ('title', 'cost')


class ParticipantAdmin(admin.ModelAdmin):
    list_display = ('get_user', 'get_giveaway', 'number')
    search_fields = ('number', 'get_giveaway')

    def get_user(self, obj):
        return obj.user
    
    def get_giveaway(self, obj):
        return obj.giveaway

    get_user.short_description = "User"
    get_giveaway.short_description = "Giveaway"

admin.site.register(Giveaway, GiveawayAdmin)
admin.site.register(ItemImage)
admin.site.register(Item, ItemAdmin)
admin.site.register(Participant,ParticipantAdmin)
