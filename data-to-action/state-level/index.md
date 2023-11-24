---
title: State level
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-21
search_exclude: true
nav_order: 8
---

# Questions relevant at the State level
Questions tagged for the state level focus on overarching policies, resource allocation, and strategic planning for education at a broader administrative scale. State-level administrators would use this information to make informed decisions regarding statewide initiatives, funding distribution, and the development of comprehensive educational policies.

## Access and Retention
{% for page in site.pages %}
  {% if page.categories contains 'state' and page.categories contains 'access-and-retention' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## Equity
{% for page in site.pages %}
  {% if page.categories contains 'state' and page.categories contains 'equity' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## Planning and Monitoring
{% for page in site.pages %}
  {% if page.categories contains 'state' and page.categories contains 'planning-and-monitoring' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## Quality
{% for page in site.pages %}
  {% if page.categories contains 'state' and page.categories contains 'quality' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}
