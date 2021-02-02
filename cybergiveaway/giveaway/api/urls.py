from django.urls import path

from rest_framework import routers
from .views import GiveawayViewSet, GiveawayHistoryViewSet

router = routers.SimpleRouter()
router.register('giveaway', GiveawayViewSet, basename='giveaway')
router.register('history', GiveawayHistoryViewSet, basename='history')

urlpatterns = []
urlpatterns += router.urls