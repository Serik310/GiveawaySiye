from rest_framework import viewsets

from .serializers import GiveawayListRetrieveSerializer, ParticipantSerializer, ItemSerializer, GiveawaySerializer
from ..models import Giveaway, Participant, Item


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

    action_to_serializer = {
        "list": GiveawayListRetrieveSerializer,
        "retrieve": GiveawayListRetrieveSerializer,
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class GiveawayHistoryViewSet(viewsets.ModelViewSet):

    queryset = Giveaway.objects.filter(is_archived = 'True')
    serializer_class = GiveawaySerializer