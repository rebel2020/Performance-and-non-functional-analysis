from mongoengine import *
import datetime

class PerformanceData(Document):
    value = StringField(required=True)

