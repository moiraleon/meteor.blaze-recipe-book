import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/routes.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
  images:[
    {image: 'https://cdn.petcarerx.com/LPPE/images/articlethumbs/Pomeranian-White-Zoom-In-IG.jpg'},
    {image: 'https://dogsized.com/wp-content/uploads/2021/08/Fluffy-Dog-Breeds-Pomeranian-.png'},
    {image: 'https://cdn3.volusion.com/uxmhm.qxgbz/v/vspfiles/photos/RainbowMohawk-1.jpg'},
    {image: 'https://localist-images.azureedge.net/photos/571993/big_square/fc2e3fd514e0a80e1e980de20c5042493e58170e.jpg'}
  ],
  names:[
    {name: 'Bruno'},
    {name: 'Lanny'},
    {name: 'Crusty'},
    {name: 'Stinky'}
  ],
  breeds:[
    {breed: 'cotton ball'},
    {breed: 'pomeranian'},
    {breed: 'rainbow dragon'},
    {breed: 'golden retriever'}
  ]
});