# Generated by Django 4.1.3 on 2023-09-19 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FrSentence',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sentence', models.TextField()),
                ('translated_sentence', models.TextField()),
                ('difficulty_score', models.DecimalField(decimal_places=4, max_digits=10)),
            ],
        ),
    ]
