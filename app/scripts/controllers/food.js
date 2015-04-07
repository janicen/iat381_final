'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:FoodCtrl
 * @description
 * # FoodCtrl
 * Controller of the myappApp
 */

var global = 0;

angular.module('myappApp')
  .controller('FoodCtrl', function ($scope) {
    $scope.awesomeThings = [];

        $scope.comment = [];
        $scope.counter = 1;
        $scope.btnAdd = function() {
            if($scope.txtcomment !==''){
                $scope.comment.unshift($scope.txtcomment);
                $scope.txtcomment = '';
                global = $scope.counter++;
            }
        };

        // jQuery(function() {
        //     jQuery('.slider.touch').pagesSliderTouch();
        //     jQuery('.slider').pagesSlider();
        // });
    });


    /*===================================
      INDEXDB START
     ====================================*/

    // IndexedDB
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
     
    /* 
        Note: The recommended way to do this is assigning it to window.indexedDB,
        to avoid potential issues in the global scope when web browsers start 
        removing prefixes in their implementations.

        You can assign it to a varible, like var indexedDB… but then you have 
        to make sure that the code is contained within a function.
    */
     
    // Create/open database
    var request = indexedDB.open("testdb", 6);
     
    request.onerror = function(e) {
        console.log(e);
    };
    request.onupgradeneeded = function (e) {
        console.log('database upgraded');
        var db = e.target.result;
        console.log(db);
        // Create an objectStore for this database
        var objectStore = db.createObjectStore('data', {keyPath:'keyPath'});
    }
    request.onsuccess = function(event) {
        console.log('database open');
        APP.db = event.target.result;
        APP.ready = true;
    };

    //Create a minimal API for our APP
    var APP = {
        db:null,
        ready:false,
        insert:function() {
            if (!APP.ready) {
                console.log('DB is not ready');
                return;
            }
            var key = global;
            var value = $('#value').val();
            var transaction = APP.db.transaction('data', 'readwrite');
            var objectStore = transaction.objectStore('data');
            var object = {keyPath:key, value:value};
            // var object = {value:value};
            console.log('inserting', object);
            var request = objectStore.put(object);
            request.onsuccess = function(e) {
                console.log(e);
            };
        },
        fetch:function() {
            if (!APP.ready) {
                console.log('DB is not ready');
                return;
            }

            //count length of indexdb database
            var transaction2 = APP.db.transaction(["data"], "readonly");
            var objectStore2 = transaction2.objectStore("data"); 
            var count2 = objectStore2.count();
            var dbCounter = 0;

            count2.onsuccess = function() {
                dbCounter = count2.result;
                console.log(count2.result);
                
                //display all comments from the database
                while(global < dbCounter){
                    
                    // var key = $('#search-key').val();
                    var key = global++;
                    var transaction = APP.db.transaction('data', 'readwrite');
                    var objectStore = transaction.objectStore('data');
                    var request = objectStore.get(key);
                    request.onsuccess = function(e) {
                        console.log(e);
                        // $('#output').html(JSON.stringify(e.target.result));
                        $('#output').prepend("<li class=\"animated fadeInDown\">" + e.target.result.value + "</li>");
                    };

                }
            };
            
            //disable refresh button after clicking once
            document.getElementById("fetch").onclick = "";

         },
        remove:function() {
        }
    }
    

    /*===================================
      INDEXDB END
     ====================================*/