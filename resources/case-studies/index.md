---
title: Case Studies
description: A set of case studies that can be used to understand how data is used different education quality improvement programmes in India.
layout: default
parent: Resources
has_children: true
has_toc: false
last_modified_date: 2023-11-24
---

# Case Studies
Below you will find some case studies that illustrate how data can be used to inform decision making in education systems.

{% for page in site.pages %}
  {% if page.categories contains 'case-study' %}
  -  [{{page.description}}]({{site.url}}{{page.url}}) – {{page.lede}}
  {% endif %}
{% endfor %}