from rest_framework import serializers
from .models import Post, PostImage

class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ['image']

class PostSerializer(serializers.ModelSerializer):
    images = PostImageSerializer(many=True, read_only=True)
    image_files = serializers.ListField(
        child=serializers.ImageField(write_only=True), write_only=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'content', 'location', 'music_url', 'created_at', 'updated_at', 'images', 'image_files']
        extra_kwargs = {'user': {'read_only': True}}  # user 필드를 읽기 전용으로 설정

    def create(self, validated_data):
        image_files = validated_data.pop('image_files')
        post = Post.objects.create(**validated_data)
        for image_file in image_files:
            PostImage.objects.create(post=post, image=image_file)
        return post

    def update(self, instance, validated_data):
        image_files = validated_data.pop('image_files', None)
        instance.content = validated_data.get('content', instance.content)
        instance.location = validated_data.get('location', instance.location)
        instance.music_url = validated_data.get('music_url', instance.music_url)
        instance.save()

        if image_files:
            instance.images.all().delete()
            for image_file in image_files:
                PostImage.objects.create(post=instance, image=image_file)

        return instance
