from rest_framework.routers import SimpleRouter

from .views import ProfileViewSet


router = SimpleRouter()
router.register('profiles', ProfileViewSet, basename='profiles')

urlpatterns = []
urlpatterns += router.urls