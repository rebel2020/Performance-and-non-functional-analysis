from mongoengine import *
import datetime

class PerformanceData(Document):
    category = StringField(required=True)
    value = StringField(required=True)
    createdAt = DateTimeField(default=datetime.datetime.utcnow)

    def __unicode__(self):
        return self.type + str(self.createdAt)
        
