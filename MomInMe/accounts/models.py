from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):

    profile_image = models.ImageField(upload_to='profiles/', null=True, blank=True)
    baby_nickname = models.CharField(max_length=10, verbose_name="아기 별명")
    baby_birtday = models.DateField(null=True, blank=True, verbose_name="아기 생일")
    baby_gender = models.CharField(max_length=10, verbose_name="아기 성별")
    mother_nickname = models.CharField(max_length=10, verbose_name="엄마 별명")
    mother_birthday = models.DateField(null=True, blank=True, verbose_name="엄마 생일")

    def __str__(self):
        return self.username
