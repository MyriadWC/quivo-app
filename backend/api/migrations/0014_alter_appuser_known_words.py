# Generated by Django 4.1.3 on 2024-01-07 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_appuser_known_words'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='known_words',
            field=models.ManyToManyField(blank=True, to='api.userword'),
        ),
    ]