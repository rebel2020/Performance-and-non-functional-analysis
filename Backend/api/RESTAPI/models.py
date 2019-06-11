from mongoengine import Document, EmbeddedDocument, fields

class PerformanceData(Document):
    category = fields.StringField(required=True)
    value = fields.StringField(required=True)
    createdAt = fields.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.type + str(self.createdAt)
        
