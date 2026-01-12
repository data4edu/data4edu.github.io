---
title: Access and Retention
description: Questions related to Access and Retention with a focus on understanding and ensuring access to education while addressing issues related to student retention.
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-18
search_exclude: true
nav_order: 1
---
# Questions related to Access and Retention
This category focuses on understanding and ensuring access to education while addressing issues related to student retention. The questions delve into various aspects such as enrollment trends, dropout rates, infrastructure requirements, and the effectiveness of entitlement programs. The goal is to use data to identify barriers to access, improve retention rates, and prioritize schools for upgrades or interventions.

## State level
{% for page in site.pages %}
  {% if page.categories contains 'access-and-retention' and page.categories contains 'state' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}

## District, Block or Circle level
{% for page in site.pages %}
  {% if page.categories contains 'access-and-retention' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}

## School level
{% for page in site.pages %}
  {% if page.categories contains 'access-and-retention' and page.categories contains 'school' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}