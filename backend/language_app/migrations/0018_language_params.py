# Generated by Django 4.1.3 on 2023-12-27 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0017_alter_desentence_id_alter_frsentence_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='language',
            name='params',
            field=models.JSONField(default=[0, 0, 0, 0]),
        ),
    ]