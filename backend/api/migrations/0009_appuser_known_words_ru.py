# Generated by Django 4.1.3 on 2023-12-31 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0019_rusentence_ruworddata'),
        ('api', '0008_alter_appuser_known_languages_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='known_words_ru',
            field=models.ManyToManyField(blank=True, to='language_app.ruworddata'),
        ),
    ]
