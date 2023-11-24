---
title: Contribute
layout: about
---

# Collaborate with us!

This website is a work in progress. We welcome contributions from the community. 

You can contribute by:
1. Suggesting questions and resources that can be added to the website
2. Making editorial suggestions for the existing content on the website
3. Sharing ideas on what you would like to see on the website
4. Sharing any other relevant experiences or resources that you think would be useful for the education community in India

## How to contribute
The easiest way to contribute is by filling the [feedback form below](#share-feedback) or by sending us an email at [contact@data4edu.systems](mailto:contact@data4edu.systems). We would love to hear from you. Please mention the page's link in your email if you are suggesting changes to a specific page.

If you are familiar with GitHub, you can click on the "Edit this page on GitHub" link at the bottom of each page to suggest changes to the content directly. You can also create a new issue in the website's [repository on GitHub](https://github.com/data4edu/data4edu.github.io/) to share your ideas.

## Share Feedback
Have something to share with us? Could be an error in our content, a suggestion for improvement or a request for new content. We would love to hear from you! Please fill the form below to share your feedback with us.

<div style="display: flex; justify-content: center; align-items: center;">
  <div class="feedback-form">
    <p><strong>Please share your email address if you would like us to get back to you.</strong></p>
    <input type="email" id="user_email" name="user_email" style="width: 100%">
    
    <p><strong>What would you like to share with us?</strong></p>
    <textarea id="comment" name="comment" maxlength="200" style="width: 100%"></textarea>
    <br/>
    <small><em>Max. 200 characters only. If you want to say more, send us an email!</em></small>
    
    <p class="center">
      <button id="share-button" class="btn btn-primary fs-5" onclick="addComment()">Share feedback</button>
      <button id='heart-button' class="btn fs-5 d-none" disabled><div id='heartbeat' class="lds-heart"><div></div></div></button>
    </p>

    <p id='submission-text' class='d-none center purple'>Thank you! We have received your feedback.</p>
  </div>
</div>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="/assets/js/comment.js"></script>