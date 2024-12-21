---
title: 'Pagination'
layout: 'layouts/base.njk'
pagination:
  data: collections.sample_1
  size: 5
  alias: posts
---

## {{title}}

This section of the site will showcase the pagination capabillities of this templates.

<div class="page" id="Page">
	<h2> My most recent projects: </h2>
	{% for post in posts %}
		<ul>
			<li> On: {{post.date | date: "%a, %b %d, %y"}}, <a href="{{ post.url | url}}">{{ post.data.title }}</a> by: {{ site.author.name }}</li>
		</ul>
	{% endfor %}
</div>

<div class="pagination center">
  {% if pagination.href.previous %}
    <a class="previous" href="{{ baseurl }}{{ pagination.href.previous }}">Newer posts</a>
  {% endif %}
  {% if pagination.href.next %}
    <a class="next" href="{{ baseurl }}{{ pagination.href.next }}">Older posts</a>
  {% endif %}
</div>
