"use strict";var KTAppInboxListing=function(){
    var t,n,e=()=>{
        document.querySelector("#kt_inbox_listing_wrapper > .row").classList.add("px-9","pt-3","pb-5")};return{init:function(){
            (t=document.querySelector("#kt_inbox_listing"))&&((n=$(t).DataTable({info:!1,order:[]})).on("draw",(
                function(){
                
                e()})),document.querySelector('[data-kt-inbox-listing-filter="search"]').addEventListener("keyup",(function(t)
                
                {n.search(t.target.value).draw()})),e())}}}();KTUtil.onDOMContentLoaded((function(){KTAppInboxListing.init()}));
