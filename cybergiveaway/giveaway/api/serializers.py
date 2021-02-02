from rest_framework import serializers
from ..models import Giveaway, Item, Participant


class GiveawaySerializer(serializers.ModelSerializer):

    class Meta:
        model = Giveaway
        fields = '__all__'

    
class ParticipantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Participant
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model=Item
        fields = '__all__'


class GiveawayListRetrieveSerializer(serializers.ModelSerializer):
    """ Full giveaway serializer """
    item = ItemSerializer(read_only=True, many=True)

    class Meta:
        model = Giveaway
        fields = '__all__'


class ItemDetailSerializer(serializers.ModelSerializer):

    post = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = '__all__'

