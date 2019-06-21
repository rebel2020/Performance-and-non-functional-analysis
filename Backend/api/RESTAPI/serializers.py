from rest_framework_mongoengine import serializers
from api.RESTAPI.models import *
 
class LighthouseDataSerializer(serializers.DocumentSerializer):
    class Meta:
        model = LighthouseData
        fields = '__all__'
class GetlingDataSerializer(serializers.DocumentSerializer):
    class Meta:
        model = GetlingData
        fields = '__all__'
class MetricDetailedSerializer(serializers.EmbeddedDocumentSerializer):
    class Meta:
        model = MetricDetailed
        fields = '__all__'