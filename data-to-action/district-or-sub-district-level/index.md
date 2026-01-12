---
title: District or Sub-district level
description: Questions relevant at the District or Sub-district level with a focus on tailoring strategies to meet the unique challenges and characteristics of individual districts or sub-districts.
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-21
search_exclude: true
nav_order: 7
---

# Questions relevant at the District or Sub-district level
Tagged questions for the district, block or cluster level are tailored to the needs of local administrators responsible for managing a specific geographical area. These questions address issues related to district-level planning, resource allocation, and the implementation of policies. The focus is on tailoring strategies to meet the unique challenges and characteristics of individual districts or sub-districts.

## Access and Retention
{% for page in site.pages %}
  {% if page.categories contains 'access-and-retention' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}

## Equity
{% for page in site.pages %}
  {% if page.categories contains 'equity' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}

## Planning and Monitoring
{% for page in site.pages %}
  {% if page.categories contains 'planning-and-monitoring' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}

## Quality
{% for page in site.pages %}
  {% if page.categories contains 'quality' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.permurl}}{{page.url}})
  {% endif %}
{% endfor %}
