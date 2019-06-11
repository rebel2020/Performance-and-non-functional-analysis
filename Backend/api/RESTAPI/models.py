from django.db import models

class DataEntry(models.Model):
    type = models.CharField(max_length=50)
    dataEntry = models.TextField(max_length=1000000)
    arrTime = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.type + str(self.arrTime)
