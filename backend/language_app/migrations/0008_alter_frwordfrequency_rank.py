# Generated by Django 4.1.3 on 2023-11-27 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0007_alter_frwordfrequency_frequency'),
    ]

    operations = [
        migrations.AlterField(
            model_name='frwordfrequency',
            name='rank',
            field=models.DecimalField(decimal_places=1, max_digits=10, null=True),
        ),
    ]
