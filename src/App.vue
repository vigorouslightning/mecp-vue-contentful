<template>
  <div id="app">
    <section class="bg-hero full-height home container-fluid">
      <img
        id="p_lt_ctl01_MECPBackground_ucEditableImage_imgImage"
        title="MECP"
        src="https://www.mecp.com/MECP/media/MECP/MECP_Hero.jpg"
        alt="MECP"
      />

      <div
        id="mission-statement"
        class="content sticky-item"
        style="visibility: visible; opacity: 1;"
      >
        <h1 class="title" v-html="pageTitle"></h1>
        <br />
        <br />
        <div class="buttons container">
          <div class="col-md-6 col-lg-4">
            <a class="btn btn-primary btn-lg outline" href="../Professionals">PROFESSIONALS</a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="btn btn-primary btn-lg outline" href="../Employers">EMPLOYERS</a>
          </div>
          <div class="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-0">
            <a class="btn btn-primary btn-lg outline" href="../Vehicle-Owners">VEHICLE OWNERS</a>
          </div>
        </div>
      </div>
      <a class="scroll-down-button icon-down-arrow" href="#aboutMECP"></a>
    </section>
    <section
      class="padding-top-lg"
      v-for="promo in content.promosList"
      :key="promo.title"
      style="background-size: cover"
      :style="[promo.fields.backgroundImage ? {'background': 'url(' + promo.fields.backgroundImage.fields.file.url + ')'} : {}]"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-offset-3 col-lg-9">
            <h2>
              <p>{{promo.fields.title}}</p>
            </h2>
          </div>
        </div>
        <div class="row padding-vertical-lg">
          <div class="col-lg-offset-3 col-lg-9" v-html="getHtml(promo.fields.description)"></div>
        </div>
        <div class="row" v-if="promo.fields.linkedPage">
          <div class="col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4">
            <a
              v-bind:href="promo.fields.linkedPage.fields.slug"
              id="p_lt_ctl09_WhyHireText_ucEditableText_widget1_ctl00_MECPLinkButton"
              class="link-button"
            >
              Learn More
              <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div
      aria-hidden="true"
      aria-labelledby="profile"
      class="modal"
      id="hamburgerModal"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-content hamburgerModal">
        <div class="modal-body">
          <button aria-label="Close" class="close" data-dismiss="modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="innerLinks">
            <a href="../Professionals">Professionals</a>
            <a href="../Employers">Employers</a>
            <a href="../Vehicle-Owners">Vehicle Owners</a>
            <a href="../Career-Center" target="_blank">Career Center</a>
            <a href="../Study-Guides">Study Guides</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import MECPHeader from "./components/PersonGreeter";

export default {
  name: "app",
  components: {
    MECPHeader
  },
  data() {
    return {
      content: Object,
      body: Object,
      pageTitle: Object
    };
  },
  methods: {
    getHtml(document) {
      return documentToHtmlString(document);
    },
    findLearnMoreButton(html) {
      console.log(typeof html);
      // if (html.contains("Learn More"))
      //   console.log("true");
      // else
      //   console.log("false");
    }
  },
  mounted() {
    var self = this;
    var contentfulClient = contentful.createClient({
      accessToken: "3OWbxhoixpB0f7od1LzRFGzMbUBgIQr5lsSZ78z-lWw",
      space: "8hfgi7fwntly"
    });
    contentfulClient
      .getEntries({
        "sys.id": "5rrJ9ZCwBHVGkRaJeQfQaK",
        include: 4
      })
      .then(function(entries) {
        self.content = entries.items[0].fields;
        self.body = documentToHtmlString(
          entries.items[0].fields.aboutDescription
        );
        self.pageTitle = documentToHtmlString(
          entries.items[0].fields.pageTitle
        );
      });
  }
};
</script>

<style>
</style>
