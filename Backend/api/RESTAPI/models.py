from mongoengine import Document, EmbeddedDocument, fields

class PerformaceData(Document):
    category = fields.StringField(required=True)
    value = fields.TextField(max_length=1000000, required=True)
    createdAt = fields.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.type + str(self.createdAt)
        
