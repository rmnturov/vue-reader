<template lang="pug">
  div
    h1 
      a(:href="feed.link") {{feed.title}}
    ul.feed(v-if="true")
      li.feed__list-item(v-for="post in feed.entries")
        a.feeditem__link(:href="post.link" target="_blank")
          figure.feeditem__img-wrapper
            img.feeditem__img(v-if="post.enclosure" :src="post.enclosure.url" :alt="post.title")
          .feeditem__hgroup
            h2.feeditem__header {{post.title}}
            p.feeditem__description {{post.content}}
          time.feeditem__date(:datetime="post.isoDate") {{ post.isoDate | humanDate }}
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
        var tempParsed;
        var doc = parser.parseString(res.data, function(err, parsed) {
          tempParsed = parsed.feed;
          console.log(tempParsed);
        });
        return { feed: tempParsed };
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

$line-height: 20px;

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
    width: 33%;
    // height: 400px;
  }
}

.feeditem {
  &__link {
    position: relative;
    display: flex;
    padding: 30px;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    border-radius: 6px;

    &:hover {
      .feeditem__header {
        color: red;
      }
    }
  }
  // обертка для изображения, выставляет пропрорции
  &__img-wrapper {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 100%;
    height: 0px;
    padding-bottom: 56.3%; // соотношение сторон 16/9
    background-color: lightgrey;
    margin-bottom: 12px;
  }
  // растягивает изображение на всю площадь обёртки, 
  // заполняет фоткой всю область, кропает
  &__img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__hgroup {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    max-height: $line-height * 5;
    overflow: hidden;
    margin-bottom: $line-height / 2;

    // плавный фейд текста
    &::after {
      content: "";
      position: absolute;
      width: 66%;
      height: $line-height;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 33%,
        white
      );
    }

  }
  &__header {
    // display: inline;
    font-size: 16px;
    line-height: $line-height;
    font-weight: 600;
    font-kerning: auto;
  }
  &__description {
    font-size: 16px;
    line-height: $line-height;
    font-weight: normal;
  }
  &__date {
    font-size: 14px;
    line-height: $line-height;
    color: hsl(0, 0, 40%);
  }
}
</style>
