import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(".listitem").on("click",()=>{
    $(".listitem").css("text-decoration","line-through")
});
