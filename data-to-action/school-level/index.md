---
title: School level
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-21
search_exclude: true
nav_order: 5
---

# Questions relevant at the School level
Questions under the school tag are designed for stakeholders at the individual school level. These include teachers, principals, and school management committees. The emphasis is on practical, on-the-ground concerns such as student access, equity, planning, and quality improvement within the specific context of a single school. These questions help school-level stakeholders make informed decisions to enhance the educational experience for their students.

## Access and Retention
{% for page in site.pages %}
  {% if page.categories contains 'school' and page.categories contains 'access-and-retention' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## Equity
{% for page in site.pages %}
  {% if page.categories contains 'school' and page.categories contains 'equity' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## Planning and Monitoring
{% for page in site.pages %}
  {% if page.categories contains 'school' and page.categories contains 'planning-and-monitoring' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## Quality
{% for page in site.pages %}
  {% if page.categories contains 'school' and page.categories contains 'quality' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}
