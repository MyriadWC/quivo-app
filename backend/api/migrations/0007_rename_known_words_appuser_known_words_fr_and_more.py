# Generated by Django 4.1.3 on 2023-12-17 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language_app', '0014_desentence_difficulty_score_and_more'),
        ('api', '0006_appuser_last_current_language'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appuser',
            old_name='known_words',
            new_name='known_words_fr',
        ),
        migrations.AddField(
            model_name='appuser',
            name='known_words_de',
            field=models.ManyToManyField(to='language_app.deworddata'),
        ),
    ]
