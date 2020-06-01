# Generated by Django 3.0.6 on 2020-05-20 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('description', models.TextField(max_length=250)),
                ('github', models.URLField()),
                ('demo', models.URLField(blank=True)),
                ('image', models.FileField(blank=True, upload_to='photos/')),
                ('show', models.BooleanField(default=False)),
            ],
        ),
    ]
