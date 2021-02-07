from django.urls import path

from rest_framework import routers
from .views import GiveawayViewSet

router = routers.SimpleRouter()
router.register('giveaway', GiveawayViewSet, basename='giveaway')

urlpatterns = []
urlpatterns += router.urls