"use strict";

var socketHandler = require("../socketHandler/socketHandler.js");
var esConnector = require("../elasticSearch/elasticSearchConnector.js");
var Representation = require("../representation/representation.js");
var utils = require("../utils/utils.js");

function KeyWord( name ){

    var self = this;
    self.name = name;
    self.id = utils.guid();
    self.tweetCount = 0;
    self.representation = Representation( self.name );
    //todo lang

    self.onNewTweet =  function( callback ) {
        self.tweetCount++;//TODO faux si queue & donc plusieur tweet

        socketHandler.notifyInRoom( self.id, "tweetCount", self.tweetCount );

        esConnector.searchNewKeysWords( self, getRegexWordsAlreadyFlag(), function( newKeysWords ) {
            if( newKeysWords.length > 0 ){

                var tabKeysWords = [];
                for( var i = 0; i < newKeysWords.length; i++ ){

                    (function (i) {

                        esConnector.getKeysWordsReferences( self, newKeysWords[i].key, getRegexWordsAlreadyFlag(), function( keyWordsReferences ) {

                            tabKeysWords.push({
                                keyWord: newKeysWords[i].key,
                                occurence: newKeysWords[i].occurence,
                                references: keyWordsReferences
                            });

                            if (i === newKeysWords.length - 1) {

                                self.representation.addKeysWords( tabKeysWords, function ( keysWordObjects ) {
                                    socketHandler.notifyInRoom( self.id, "newWord", keysWordObjects );
                                    callback( self );
                                });
                            }
                        });

                    }(i));
                }

            } else {
                callback( self );
            }
        });
    };

    self.mock = function( mockSocketHandler, mockEsConnector ){
        socketHandler = mockSocketHandler;
        esConnector = mockEsConnector;
    };

    function getRegexWordsAlreadyFlag(){

        var words = self.representation.getWordsAlreadyFlag();

        var regex = "";

        for( var i = 0 ; i < words.length ; i++ ){
            if( i !== 0 ){
                regex += "|";
            }
            regex += words[i] ;
        }
        return regex;
    }
}

module.exports= function( name ){
    return new KeyWord( name );
};