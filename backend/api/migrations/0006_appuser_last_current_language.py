# Generated by Django 4.1.3 on 2023-12-17 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_appuser_known_languages'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='last_current_language',
            field=models.CharField(default='fr', max_length=2),
        ),
    ]