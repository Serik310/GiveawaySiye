from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError('Users must have emails')
        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(
            email=email,
            password=password
        )
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):

    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True


@receiver(post_save, sender=get_user_model())
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Profile(models.Model):
    user = models.OneToOneField(get_user_model(), related_name='profile', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.get_full_name()

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'