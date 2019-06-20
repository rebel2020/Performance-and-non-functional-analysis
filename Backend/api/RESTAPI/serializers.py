from rest_framework_mongoengine import serializers
from api.RESTAPI.models import LighthouseData,GetlingData
 
class LighthouseDataSerializer(serializers.DocumentSerializer):
    class Meta:
        model = LighthouseData
        fields = '__all__'
class GetlingDataSerializer(serializers.DocumentSerializer):
    class Meta:
        model = GetlingData
        fields = '__all__'
