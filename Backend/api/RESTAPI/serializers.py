from rest_framework_mongoengine import serializers
from api.RESTAPI.models import PerformanceData
 
class PerformanceSerializer(serializers.DocumentSerializer):
    class Meta:
        model = PerformanceData
        fields = '__all__'