---
title: Equity
description: Questions related to Equity with a focus on understanding and addressing issues related to equity in education.
layout: default
has_toc: false
has_children: false
parent: Data to Action
last_modified_date: 2023-10-21
search_exclude: true
nav_order: 2
---

# Questions related to Equity
Equity in education is the central theme of this category. It emphasizes the collection and analysis of data related to diverse student demographics, including economic status (EWS families), gender, migration background, social categories, disabilities, and entitlements for specific groups. The aim is to use this information to promote inclusivity, address disparities, and enhance the quality of education at both individual schools and broader administrative levels.

## State level
{% for page in site.pages %}
  {% if page.categories contains 'equity' and page.categories contains 'state' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## District, Block or Circle level
{% for page in site.pages %}
  {% if page.categories contains 'equity' and page.categories contains 'district' or page.categories contains 'block' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

## School level
{% for page in site.pages %}
  {% if page.categories contains 'equity' and page.categories contains 'school' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}