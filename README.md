jSlider
=======

jQuery based slider plugin

Using
-----
```javascript
  $(document).ready(function(){
    options = {leftBtn: '#sl-prev', rightBtn: '#sl-next', quantity: 1, autoPlay: true, autoPlayDelay: 3}; /* options */
    $('#slider-block').jSlider(options);
  });
```
Options
-------
```javascript
  leftBtn: '#leftBtn', /* Left button elemet's identyfier */
  rightBtn: '#rightBtn', /* Right button elemet's identyfier */
  pointers: '#sl-pointers', /* Pointers block's identyfier */
  pointers_elems: 'a', /* Pointers element with link */
  links_attr: 'rel', /* Attribute from pointers_elems to load next slide */
  container: '#sl-container', /* Slider's container */
  active_class: 'active', /* Pointers active class */
  inactive_class: 'inactive', /* Pointers inactive class */
  quantity: 1, /* @TODO: quantity */
  autoPlay: false,  // true or false
  autoPlayDelay: 10  // delay in seconds
```
