---
title: Quality
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-21
search_exclude: true
nav_order: 4
---

# Questions related to Quality
Quality in education is the central concern of this category, examining factors like academic results, teacher capability, vocational training, and the impact of various programs on learning outcomes. The questions explore how data can be used to evaluate and improve teacher training programs, assess the effectiveness of educational initiatives, and enhance the overall quality of education. Additionally, it addresses the use of data for library management, selecting areas of focus, and improving vocational education facilities in schools.

## State level
{% for page in site.pages %}
  {% if page.categories contains 'quality' and page.categories contains 'state' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## District, Block or Circle level
{% for page in site.pages %}
  {% if page.categories contains 'quality' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## School level
{% for page in site.pages %}
  {% if page.categories contains 'quality' and page.categories contains 'school' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}