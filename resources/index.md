---
title: Resources
layout: default
nav_order: 3
has_children: true
has_toc: false
last_modified_date: 2023-08-02
search_exclude: true
---

# Resources
{: .no_toc }

![](/assets/images/Resources%20-%20Header.png)

This page contains a list of resources that can be used to understand the principles of data systems for education and how to use data effectively.

### [Case Studies](./case-studies/)
A set of case studies that can be used to understand how data is used different education quality improvement programmes in India.

{% for page in site.pages %}
  {% if page.categories contains 'case-study' %}
  -  [{{page.description}}]({{site.url}}{{page.url}}) – {{page.lede}}
  {% endif %}
{% endfor %}

### [Checklists](./checklists/)
A set of checklists to help you navigate your data journey.

{% for page in site.pages %}
  {% if page.categories contains 'checklist' %}
  -  [{{page.description}}]({{site.url}}{{page.url}}) – {{page.lede}}
  {% endif %}
{% endfor %}

### Other Resources
- [Education Datasets Wiki](./datasets) - A primer on the datasets that are available for education in India.
- [Principles and Good Practices](./principles) - A set of principles and good practices to follow while conceptualising a data system for education.
- [Taking a Macroscopic Perspective of Data Management](./data-management/) - A short note to help you understand the principles of data management at a systems level.