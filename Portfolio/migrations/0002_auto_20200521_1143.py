# Generated by Django 3.0.6 on 2020-05-21 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectinfo',
            name='description',
            field=models.TextField(max_length=400),
        ),
        migrations.AlterField(
            model_name='projectinfo',
            name='name',
            field=models.CharField(max_length=60),
        ),
    ]
