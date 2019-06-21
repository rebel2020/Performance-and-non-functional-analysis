from mongoengine import *
import datetime

class LighthouseData(Document):
    audits = StringField(required=True)
    fetchTime = StringField(default=str(datetime.date.today()))
    requestedUrl = StringField(required=True)
    finalUrl = StringField(required=True)
    runWarnings = StringField()
    lighthouseVersion = StringField(required=True)
    environment =StringField(required=True)

class GetlingData(Document):
    stats = StringField()
    fetchTime = StringField(default=str(datetime.date.today()))
    scala = StringField()
