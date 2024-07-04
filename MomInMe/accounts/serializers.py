from rest_framework import serializers
from .models import CustomUser


from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'password', 'profile_image', 'baby_nickname', 'baby_birtday', 'baby_gender', 'mother_nickname', 'mother_birthday')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user




