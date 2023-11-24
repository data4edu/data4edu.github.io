---
title: Archive
layout: default
---

# Site Archive

### Resources
{% for page in site.pages %}
  {% if page.categories contains 'resource' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}

### Data to Action - Categories
- [Access and Retention](/data-to-action/access-and-retention)
- [Equity](/data-to-action/equity)
- [Planning and Monitoring](/data-to-action/planning-and-monitoring)
- [Quality](/data-to-action/quality)

### Data to Action - Geographies
- [State](/data-to-action/state)
- [District or Sub-district](/data-to-action/district-or-sub-district)
- [School](/data-to-action/school)

### Data to Action - Questions
{% for page in site.pages %}
  {% if page.categories contains 'data-to-action' %}
  -  [{{page.description}}]({{site.url}}{{page.url}})
  {% endif %}
{% endfor %}