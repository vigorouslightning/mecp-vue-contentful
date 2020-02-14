<template>
  <div id="app">
    <header class="page-section-header container-fluid sticky">
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-lg-3 logo">
          <a class="sticky-logo" href="/">
            <img
              id="p_lt_ctl00_MECPLogo_ucEditableImage_imgImage"
              class="pull-left"
              src="/MECP/media/Logos/MECPLogo.PNG?ext=.png"
              alt
            />
          </a>
        </div>
        <nav class="col-xs-6 col-sm-8 col-lg-9">
          <ul class="utility-nav">
            <li>
              <a href="https://members.cta.tech/ctaMECP" target="_blank">
                <span class="nav-text hidden-xs-down">Store</span>
                <span class="icon-shopping-basket"></span>
              </a>
            </li>
            <li>
              <a href="https://ctaportal.cobaltsaas.com/Login.aspx?ReturnUrl=/" target="_blank">
                <span class="nav-text hidden-xs-down">Login</span>
                <span class="icon-profile"></span>
              </a>
            </li>
            <li>
              <a data-target="#hamburgerModal" data-toggle="modal" class="toggle" href="#">
                <span class="nav-text hidden-xs-down">&nbsp;</span>
                <span class="icon-menu"></span>
              </a>
            </li>
          </ul>
          <ul class="main-nav hidden-sm-down">
            <li class="current-page">
              <a href="/Professionals">Professionals</a>
            </li>
            <li class>
              <a href="/Employers">Employers</a>
            </li>
            <li class>
              <a href="/Vehicle-Owners">Vehicle Owners</a>
            </li>
            <li class>
              <a href="/Study-Guides">Study Guides</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="row subnav">
        <div class="scrollable">
          <ul>
            <li>
              <a href="/Professionals">Overview</a>
            </li>
            <li class="current-page">
              <a
                href="/Professionals/About-Certification"
                title="About Certification"
              >About Certification</a>
            </li>
            <li>
              <a
                href="/Professionals/Benefits-of-Certification"
                title="Benefits of Certification"
              >Benefits of Certification</a>
            </li>
            <li>
              <a href="/Professionals/Get-Certified" title="Get Certified">Get Certified</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="mainBlock">
      <section class="container padding-top-lg subPage">
        <h2><p>{{content}}</p></h2>
      </section>
      <section class="container padding-bottom-lg">
        <div class="padding-vertical-lg" v-html="body">

        </div>
      </section>
    </div>
    <footer class="page-section-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <p>
              <strong>
                <span class="glyphicon glyphicon-copyright-mark"></span>&copy; 2020 MECP All rights reserved.
              </strong>
              <br />
              <strong>
                <a href="/Privacy-Policy.aspx">Privacy Policy</a>
              </strong> |
              <strong>
                <a href="/Terms-of-Use">Terms of Use</a>
              </strong> |
              <strong>
                <a href="/FAQ.aspx">MECP FAQ</a>
              </strong>
              <br />
              <strong>
                <a href="//www.cta.tech/about.aspx" target="_blank">About CTA</a>
              </strong> |
              <strong>
                <a
                  href="//www.cta.tech/Membership/Divisions-Councils/Vehicle-Technology-Division.aspx"
                  target="_blank"
                >About Vehicle Technology Division</a>
              </strong>
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3">
            <p>
              <strong>CONTACT US</strong>
              <br />
              <strong>T</strong>&nbsp;866-858-1555
              <br />
              <strong>
                E&nbsp;
                <a href="mailto:mecp@mecp.com">mecp@mecp.com</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
export default {
  name: "app",
  data() {
    return {
      content: {},
      body: {}
    };
  },
  mounted() {
    var self = this;
    var contentfulClient = contentful.createClient({
      accessToken: "3OWbxhoixpB0f7od1LzRFGzMbUBgIQr5lsSZ78z-lWw",
      space: "8hfgi7fwntly"
    });
    contentfulClient
      .getEntries({
        "sys.id": "56ylxmmK8KISbgUvBRoC36",
        include: 4
      })
      .then(function(entries) {
        // entries from Contrentful are being returned here.
        self.content = entries.items[0].fields;
        return documentToHtmlString(entries.items[0].fields.content);
        //body = entries.items[0].fields.content
      })
      .then(function(renderedHtml) {
        self.body = renderedHtml
      })
  }
};
</script>

<style>
</style>
