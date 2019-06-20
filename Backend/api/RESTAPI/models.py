from mongoengine import *
import datetime

class LighthouseData(Document):
    value = StringField(required=True)

class GetlingData(Document):
    value = StringField(required=True)
