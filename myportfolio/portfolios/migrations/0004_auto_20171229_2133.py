# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-29 21:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0003_auto_20171229_2016'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='deployed_link',
            field=models.CharField(blank=True, max_length=140),
        ),
    ]
