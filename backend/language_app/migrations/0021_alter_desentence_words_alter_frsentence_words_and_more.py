# Generated by Django 4.1.3 on 2024-04-16 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0020_rename_params_language_coeffs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='desentence',
            name='words',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='frsentence',
            name='words',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='rusentence',
            name='words',
            field=models.JSONField(null=True),
        ),
    ]
