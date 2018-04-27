<template lang="pug">
  div
    h1(title="GHbdtn") Заголовок 1
    ul(v-if="true")
      //- div asdasd
      li(v-for="post in posts")
        //- img(:src="post.enclosure.url" :alt="post.title")
        //- img(v-attr="src: post.enclosure.url")
        h2 {{post.title}}
        p {{post.content}}
        div {{ post.isoDate | humanDate }}   
</template>

<script>

import axios from "axios";
var parser = require("rss-parser-browser");
let feedUrl = "http://news.ngs.ru/rss/articles/";
let corsNowUrl = "https://cors.now.sh/" + feedUrl;

export default {
  asyncData({ req, error }) {
    return axios
      .get(corsNowUrl)
      .then(res => {
        var entries;
        var doc = parser.parseString(res.data, function(err, parsed) {
          entries = parsed.feed.entries;
          console.log(entries);
        });
        return { posts: entries };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Post not found" });
      });
  },
  head: {
    title: "sadasdadasd"
  }
  // ,
  // data: () => ({
  //   // posts: [],
  //   // errors: [],
  //   message: "asdasdasdas"
  // })
  // ,
  // created() {

  //   axios
  //     .get(corsNowUrl)
  //     .then(response => {
  //       // console.log("response is : " + response.data);
  //       var doc = parser.parseString(response.data, function(err, parsed) {
  //         console.log("PARSED TITLE " + parsed.feed.title);
  //         console.log(parsed.feed.entries);
  //         // posts = parsed.feed.entries;
  //       });
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         console.log("ERROR RESPONCE " + error.response.headers);
  //       } else if (error.request) {
  //         console.log("ERROR REQUEST " + error.request);
  //       } else {
  //         console.log("ERROR MESSAGE " + error.message);
  //       }
  //       console.log("ERROR CONFIG " + error.config);
  //     });
  // }
};
</script> 

<style lang="scss">
a {
  display: inline;
}
</style>
