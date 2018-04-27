<template lang="pug">
  div
    h1(title="GHbdtn") Заголовок 1
      ul.feed(v-if="true")
        li.feed__list-item(v-for="post in posts")
          a.feeditem__link(:href="post.link")
            figure.feeditem__img-wrapper
              img.feeditem__img(v-if="post.enclosure" :src="post.enclosure.url" :alt="post.title")
            h2.feeditem__header {{post.title}}
            p.feeditem__description {{post.content}}
            time.feeditem__date() {{ post.isoDate | humanDate }}
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
*:focus {
  outline: 2px solid #1c6ea4;
  outline-offset: 2px;
}
a {
  display: inline;
}
.feed {
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  &__list-item {
    position: relative;
    margin: 0;
    padding: 0;
    float: left;
    width: 25%;
    height: 400px;
  }
}

.feeditem {
  &__link {
    position: relative;
    display: flex;
    height: 100%;
    padding: 30px;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    border-radius: 6px;

    &:hover {
      .feeditem__header {
        color: red;
        // border-bottom: 1px solid rgba(255, 0, 0, 0.3);
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 60px;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 33%,
        white
      );
    }
  }
  &__img-wrapper {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 100%;
    // min-height: 33%;
    // padding-bottom: 75%;
    height: 56%;
    background-color: lightgrey;
    margin-bottom: 12px;
  }
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__header {
    // display: inline;
    font-size: 16px;
    line-height: 20px;
  }
  &__description {
    font-size: 16px;
    line-height: 20px;
  }
  &__date {
    font-size: 16px;
    line-height: 20px;
    color: grey;
  }
}
</style>
