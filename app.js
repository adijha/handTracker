navigator.getUserMedia = 
  navigator.getUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

//select everything in my html
const video = document.querySelector('#video')
const audio = document.querySelector('#audio')
const canvas = document.querySelector('#canvas')
// const context = document.getContext('2d')

//operations