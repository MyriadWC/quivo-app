from rest_framework import serializers
from language_app.models import FrSentence

class FrSentenceModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FrSentence
        fields = ("id", "sentence", "difficulty_score")