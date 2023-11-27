---
title: Planning and Monitoring
description: Questions related to Planning and Monitoring with a focus on leveraging data for effective decision-making, resource allocation, and continuous improvement.
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-21
search_exclude: true
nav_order: 3
---

# Questions related to Planning and Monitoring
Planning and monitoring involve the strategic use of data to develop, assess, and refine educational plans. The questions in this category cover topics such as creating district-level report cards, making school plans public, using data to secure additional funding, involving school management committees, and ensuring the accuracy of data at various administrative levels. The focus is on leveraging data for effective decision-making, resource allocation, and continuous improvement.

## State level
{% for page in site.pages %}
  {% if page.categories contains 'planning-and-monitoring' and page.categories contains 'state' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## District, Block or Circle level
{% for page in site.pages %}
  {% if page.categories contains 'planning-and-monitoring' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## School level
{% for page in site.pages %}
  {% if page.categories contains 'planning-and-monitoring' and page.categories contains 'school' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}