# Generated by Django 4.1.3 on 2023-12-17 16:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0014_desentence_difficulty_score_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='desentence',
            name='difficulty_score',
        ),
        migrations.RemoveField(
            model_name='frsentence',
            name='difficulty_score',
        ),
    ]
