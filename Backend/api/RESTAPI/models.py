from mongoengine import *
import datetime

class PerformanceData(Document):
    category = StringField(required=True)
    value = StringField(required=True)
    createdAt = StringField(default=str(datetime.date.today()))

