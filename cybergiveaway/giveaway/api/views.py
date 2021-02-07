from rest_framework import viewsets
from django_filters import rest_framework as filters

from django.http import request
from django.db.models import Q

from .serializers import GiveawayListRetrieveSerializer, ParticipantSerializer, ItemSerializer, GiveawaySerializer
from ..models import Giveaway, Participant, Item


class GiveawayFilter(filters.FilterSet):

    q = filters.OrderingFilter(
        fields = (
            ('id','id'),
        )
    )


    class Meta:
        model = Giveaway
        fields = {
            'is_archived': ['exact'],
            'cost': ['gt', 'lt'],
        }


class ParticipantViewSet(viewsets.ModelViewSet):

    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer


class ItemViewSet(viewsets.ModelViewSet):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class GiveawayViewSet(viewsets.ModelViewSet):
    """ Full API of Giveaway """
    queryset = Giveaway.objects.all()
    serializer_class = GiveawaySerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = GiveawayFilter

    action_to_serializer = {
        "list": GiveawayListRetrieveSerializer,
        "retrieve": GiveawayListRetrieveSerializer,
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
