---
title: Checklists
layout: default
parent: Resources
has_children: true
has_toc: false
last_modified_date: 2023-10-18
---

# Checklists
So you are going to build a data system for education? Here are some checklists to help you think through the process.

{% for page in site.pages %}
  {% if page.categories contains 'checklist' %}
  -  [{{page.description}}]({{site.url}}{{page.url}}) – {{page.lede}}
  {% endif %}
{% endfor %}