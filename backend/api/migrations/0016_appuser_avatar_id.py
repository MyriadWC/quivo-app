# Generated by Django 4.1.3 on 2024-01-20 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_appuser_streak'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='avatar_id',
            field=models.IntegerField(default=0),
        ),
    ]
