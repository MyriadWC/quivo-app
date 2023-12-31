# Generated by Django 4.1.3 on 2023-12-17 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0013_desentence_deworddata'),
    ]

    operations = [
        migrations.AddField(
            model_name='desentence',
            name='difficulty_score',
            field=models.DecimalField(decimal_places=4, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='frsentence',
            name='difficulty_score',
            field=models.DecimalField(decimal_places=4, default=0, max_digits=10),
        ),
    ]
