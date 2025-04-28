from django.db import models
from django.contrib.auth.models import User

class HealthLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    water = models.CharField(max_length=100, blank=True)
    exercise = models.CharField(max_length=100, blank=True)
    food = models.CharField(max_length=100, blank=True)
    sleep = models.CharField(max_length=100, blank=True)
    mindfulness = models.CharField(max_length=100, blank=True)
    date_logged = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.date_logged.strftime('%Y-%m-%d')}"
