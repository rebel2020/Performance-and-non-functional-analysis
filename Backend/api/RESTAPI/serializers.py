from rest_framework_mongoengine import serializers
from api.RESTAPI.models import *
 
class LighthouseDataSerializer(serializers.DocumentSerializer):
    class Meta:
        model = LighthouseData
        fields = '__all__'
class GatlingDataSerializer(serializers.DocumentSerializer):
    class Meta:
        model = GatlingData
        fields = '__all__'
class MetricDetailedSerializer(serializers.EmbeddedDocumentSerializer):
    class Meta:
        model = MetricDetailed
        fields = '__all__'