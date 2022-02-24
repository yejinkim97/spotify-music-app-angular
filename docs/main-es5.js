(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\yejin\Desktop\SCHOOL\4thSem\WEB\AS4\web422-a4\as5\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "27G8":
    /*!********************************************************************!*\
      !*** ./src/app/artist-discography/artist-discography.component.ts ***!
      \********************************************************************/

    /*! exports provided: ArtistDiscographyComponent */

    /***/
    function G8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtistDiscographyComponent", function () {
        return ArtistDiscographyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _music_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../music-data.service */
      "aIDz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a1) {
        return ["/album", a1];
      };

      function ArtistDiscographyComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Album Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Release Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tracks: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var album_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "20px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, album_r1.id))("src", album_r1.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.release_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", album_r1.total_tracks, " ");
        }
      }

      var ArtistDiscographyComponent = /*#__PURE__*/function () {
        function ArtistDiscographyComponent(route, dataService) {
          _classCallCheck(this, ArtistDiscographyComponent);

          this.route = route;
          this.dataService = dataService;
        }

        _createClass(ArtistDiscographyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.routeSub = this.route.params.subscribe(function (params) {
              _this.artistSub = _this.dataService.getArtistById(params.id).subscribe(function (data) {
                return _this.artist = data;
              });
              _this.albumSub = _this.dataService.getAlbumsByArtistId(params.id).subscribe(function (data) {
                var dup = new Set();
                var newItems = data.items;
                _this.albums = newItems.filter( // (item, index) => newItems.indexOf(item) === index
                function (album) {
                  var duplicate = dup.has(album.name);
                  dup.add(album.name);
                  return !duplicate;
                });
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.artistSub.unsubscribe();
            this.albumSub.unsubscribe();
            this.routeSub.unsubscribe();
          }
        }]);

        return ArtistDiscographyComponent;
      }();

      ArtistDiscographyComponent.ɵfac = function ArtistDiscographyComponent_Factory(t) {
        return new (t || ArtistDiscographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_music_data_service__WEBPACK_IMPORTED_MODULE_2__["MusicDataService"]));
      };

      ArtistDiscographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArtistDiscographyComponent,
        selectors: [["app-artist-discography"]],
        decls: 17,
        vars: 9,
        consts: [["fxLayout", "row wrap", "fxLayout.xs", "column"], ["fxFlex", "", 3, "margin", 4, "ngFor", "ngForOf"], ["fxFlex", ""], ["mat-card-image", "", "routerLinkActive", "active", "alt", "album art", 1, "album-cover", 3, "routerLink", "src"]],
        template: function ArtistDiscographyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Click the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "album cover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " for more information.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Discography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ArtistDiscographyComponent_div_16_Template, 15, 11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.artist.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Full discography for ", ctx.artist.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + ctx.artist.images[0].url + ") no-repeat center center")("background-size", "cover")("height", "450px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albums);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpc3QtZGlzY29ncmFwaHkuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 8,
        vars: 0,
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All about me - Ye Jin Kim");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " My name is Ye Jin Kim.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am currently in my fourth semester in the Computer Programming & Analysis program and working towards an Advanced Diploma at Seneca College. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This is my assignment of WEB 422 course. For this assignment, I used Angular!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "AvlM":
    /*!**********************************************************!*\
      !*** ./src/app/search-result/search-result.component.ts ***!
      \**********************************************************/

    /*! exports provided: SearchResultComponent */

    /***/
    function AvlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () {
        return SearchResultComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _music_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../music-data.service */
      "aIDz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function SearchResultComponent_div_0_div_13_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/artist/", artist_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", artist_r2.images[2].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SearchResultComponent_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Artist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchResultComponent_div_0_div_13_div_8_Template, 2, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Followers: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Popularity: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artist_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "20px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", artist_r2.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r2.followers.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", artist_r2.popularity, " ");
        }
      }

      function SearchResultComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The following is a list of artists matching the query.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Click the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "artist image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " for more information. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchResultComponent_div_0_div_13_Template, 17, 8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Results for: \"", ctx_r0.searchQuery, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results);
        }
      }

      var SearchResultComponent = /*#__PURE__*/function () {
        function SearchResultComponent(route, dataService) {
          _classCallCheck(this, SearchResultComponent);

          this.route = route;
          this.dataService = dataService;
        }

        _createClass(SearchResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.routeSub = this.route.queryParams.subscribe(function (params) {
              _this2.searchQuery = params['q'];
            });
            this.dataService.searchArtists(this.searchQuery).subscribe(function (data) {
              _this2.results = data.artists.items.filter(function (item) {
                return item.images.length > 0;
              });
            });
          }
        }]);

        return SearchResultComponent;
      }();

      SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) {
        return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_music_data_service__WEBPACK_IMPORTED_MODULE_2__["MusicDataService"]));
      };

      SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchResultComponent,
        selectors: [["app-search-result"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "content"], ["fxLayout", "row wrap", "fxLayout.xs", "column"], [4, "ngFor", "ngForOf"], ["fxFlex", ""], ["mat-card-image", "", "alt", "artist art", 1, "album-cover", 3, "routerLink", "src"]],
        template: function SearchResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 14, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchQuery);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        clientID: "41129a3794ad455eae8f54e61f70e8de",
        clientSecret: "0adbad34e43e4da79f8b66402bf4f3a6"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "FJD2":
    /*!****************************************!*\
      !*** ./src/app/view/view.component.ts ***!
      \****************************************/

    /*! exports provided: ViewComponent */

    /***/
    function FJD2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
        return ViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ViewComponent = /*#__PURE__*/function () {
        function ViewComponent() {
          _classCallCheck(this, ViewComponent);
        }

        _createClass(ViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ViewComponent;
      }();

      ViewComponent.ɵfac = function ViewComponent_Factory(t) {
        return new (t || ViewComponent)();
      };

      ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewComponent,
        selectors: [["app-view"]],
        decls: 2,
        vars: 0,
        template: function ViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Pnbb":
    /*!********************************************************!*\
      !*** ./src/app/new-releases/new-releases.component.ts ***!
      \********************************************************/

    /*! exports provided: NewReleasesComponent */

    /***/
    function Pnbb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewReleasesComponent", function () {
        return NewReleasesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _music_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../music-data.service */
      "aIDz");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      var _c0 = function _c0(a1) {
        return ["/artist", a1];
      };

      function NewReleasesComponent_div_15_mat_chip_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artist_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, artist_r3.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r3.name);
        }
      }

      var _c1 = function _c1(a1) {
        return ["/album", a1];
      };

      function NewReleasesComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Release");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Release Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tracks: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewReleasesComponent_div_15_mat_chip_19_Template, 2, 4, "mat-chip", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var album_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "20px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, album_r1.id))("src", album_r1.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.release_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.total_tracks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", album_r1.artists);
        }
      }

      var NewReleasesComponent = /*#__PURE__*/function () {
        function NewReleasesComponent(dataService) {
          _classCallCheck(this, NewReleasesComponent);

          this.dataService = dataService;
        }

        _createClass(NewReleasesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.dataService.getNewReleases().subscribe(function (data) {
              _this3.releases = data.albums.items;
            });
          }
        }]);

        return NewReleasesComponent;
      }();

      NewReleasesComponent.ɵfac = function NewReleasesComponent_Factory(t) {
        return new (t || NewReleasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_music_data_service__WEBPACK_IMPORTED_MODULE_1__["MusicDataService"]));
      };

      NewReleasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewReleasesComponent,
        selectors: [["app-new-releases"]],
        decls: 16,
        vars: 1,
        consts: [[1, "content"], ["fxLayout", "row wrap", "fxLayout.xs", "column"], ["fxFlex", "", 3, "margin", 4, "ngFor", "ngForOf"], ["fxFlex", ""], ["routerLinkActive", "active", "mat-card-image", "", "alt", "album art", 1, "album-cover", 3, "routerLink", "src"], ["aria-label", "Artist selection"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"]],
        template: function NewReleasesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Releases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The following is a list of new releases.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Click the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "album cover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "artist name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " for more information. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewReleasesComponent_div_15_Template, 20, 12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.releases);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcmVsZWFzZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "S9x4":
    /*!****************************************************!*\
      !*** ./src/app/favourites/favourites.component.ts ***!
      \****************************************************/

    /*! exports provided: FavouritesComponent */

    /***/
    function S9x4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function () {
        return FavouritesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _music_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../music-data.service */
      "aIDz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function FavouritesComponent_mat_list_item_14_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artist_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/artist/", artist_r4.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r4.name);
        }
      }

      function FavouritesComponent_mat_list_item_14_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "audio", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var track_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", track_r1.preview_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function FavouritesComponent_mat_list_item_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesComponent_mat_list_item_14_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var track_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.removeFromFavourites(track_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "queue_music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Artist(s): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FavouritesComponent_mat_list_item_14_span_12_Template, 4, 2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Album: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FavouritesComponent_mat_list_item_14_div_18_Template, 3, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var track_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", track_r1.duration, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", track_r1.artists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/album", track_r1.album.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", track_r1.album.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", track_r1.preview_url);
        }
      }

      var FavouritesComponent = /*#__PURE__*/function () {
        function FavouritesComponent(dataService) {
          _classCallCheck(this, FavouritesComponent);

          this.dataService = dataService;
        }

        _createClass(FavouritesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.dataService.getFavourites().subscribe(function (data) {
              _this4.favourites = data.tracks;
            });
          }
        }, {
          key: "removeFromFavourites",
          value: function removeFromFavourites(id) {
            var _this5 = this;

            this.dataService.removeFromFavourites(id).subscribe(function (data) {
              _this5.favourites = data.tracks;
            });
          }
        }]);

        return FavouritesComponent;
      }();

      FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) {
        return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_music_data_service__WEBPACK_IMPORTED_MODULE_1__["MusicDataService"]));
      };

      FavouritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FavouritesComponent,
        selectors: [["app-favourites"]],
        decls: 15,
        vars: 1,
        consts: [["mat-list-icon", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", "", 3, "click"], ["mat-line", ""], [3, "routerLink"], [4, "ngIf"], ["controls", "", 3, "src"]],
        template: function FavouritesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favourites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The following is a list of your favourite songs from various artists.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Click the \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "queue_music");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA0 icon to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " a song from your list\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FavouritesComponent_mat_list_item_14_Template, 19, 6, "mat-list-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favourites);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{ cursor: pointer; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0MsZUFBZSxFQUFFIiwiZmlsZSI6ImZhdm91cml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pdGVtIC5tYXQtaWNvbjpob3ZlcnsgY3Vyc29yOiBwb2ludGVyOyB9Il19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      var _c0 = function _c0() {
        return ["favourites"];
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.title = 'web422-a5';
        }

        _createClass(AppComponent, [{
          key: "handleSearch",
          value: function handleSearch() {
            this.router.navigate(['/search'], {
              queryParams: {
                q: this.searchString
              }
            });
            this.searchString = '';
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 52,
        vars: 8,
        consts: [[1, "navbar-container"], ["color", "primary", 1, "navbar"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "Home", 1, "navbar-brand"], [1, "navbar-spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], ["fxShow", "", "fxHide.xs", ""], ["xPosition", "before", "yPosition", "above", 3, "overlapTrigger"], ["userMenu", "matMenu"], ["mat-menu-item", ""], ["fixedTopGap", "56", 3, "opened", "mode", "fixedInViewport"], ["snav", ""], ["appearance", "fill"], [3, "ngSubmit"], ["matInput", "", "type", "text", "name", "searchString", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["mat-list-item", "", "routerLink", "/newReleases", "routerLinkActive", "activeRoute"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink"], ["id", "push-bottom", "mat-list-item", "", "routerLink", "/about", "routerLinkActive", "activeRoute"], [1, "sidenav-content"], [1, "bottom-spacer"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Seneca Music ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ye Jin Kim ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Artist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_29_listener() {
              return ctx.handleSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.searchString = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " library_music ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " New Releases ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " favorite ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Favourites ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " info_outline ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-sidenav-content", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", false)("mode", "side")("fixedInViewport", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "VyY6":
    /*!******************************************!*\
      !*** ./src/app/spotify-token.service.ts ***!
      \******************************************/

    /*! exports provided: SpotifyTokenService */

    /***/
    function VyY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpotifyTokenService", function () {
        return SpotifyTokenService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpotifyTokenService = /*#__PURE__*/function () {
        function SpotifyTokenService(http) {
          _classCallCheck(this, SpotifyTokenService);

          this.http = http;
          this.clientID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientID;
          this.clientSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientSecret;
        }

        _createClass(SpotifyTokenService, [{
          key: "getAccessToken",
          value: function getAccessToken() {
            var _this6 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (o) {
              var auth = btoa("".concat(_this6.clientID, ":").concat(_this6.clientSecret));
              var authBody = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('grant_type', 'client_credentials');
              _this6.tokenSub = _this6.http.post("https://accounts.spotify.com/api/token", authBody.toString(), {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': "Basic ".concat(auth)
                }
              }).subscribe(function (token) {
                _this6.accessToken = token.access_token;
                _this6.accessTokenExpires = new Date();

                _this6.accessTokenExpires.setSeconds(_this6.accessTokenExpires.getSeconds() + token.expires_in);

                o.next(_this6.accessToken);
              });
            });
          }
        }, {
          key: "getBearerToken",
          value: function getBearerToken() {
            var _this7 = this;

            if (!this.accessToken) {
              // no access token, so get a fresh one
              return this.getAccessToken();
            } else {
              if (new Date() < this.accessTokenExpires) {
                // access token exists and is valid, so return it
                return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (o) {
                  return o.next(_this7.accessToken);
                });
              } else {
                // access token exists, but is no longer valid, so get a fresh one
                return this.getAccessToken();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.tokenSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return SpotifyTokenService;
      }();

      SpotifyTokenService.ɵfac = function SpotifyTokenService_Factory(t) {
        return new (t || SpotifyTokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      SpotifyTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: SpotifyTokenService,
        factory: SpotifyTokenService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _view_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./view/view.component */
      "FJD2");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "nod/");
      /* harmony import */


      var _new_releases_new_releases_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./new-releases/new-releases.component */
      "Pnbb");
      /* harmony import */


      var _album_album_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./album/album.component */
      "gq2R");
      /* harmony import */


      var _artist_discography_artist_discography_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./artist-discography/artist-discography.component */
      "27G8");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./search-result/search-result.component */
      "AvlM");
      /* harmony import */


      var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./favourites/favourites.component */
      "S9x4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_16__["ViewComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _new_releases_new_releases_component__WEBPACK_IMPORTED_MODULE_19__["NewReleasesComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_20__["AlbumComponent"], _artist_discography_artist_discography_component__WEBPACK_IMPORTED_MODULE_21__["ArtistDiscographyComponent"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_25__["SearchResultComponent"], _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_26__["FavouritesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"]]
        });
      })();
      /***/

    },

    /***/
    "aIDz":
    /*!***************************************!*\
      !*** ./src/app/music-data.service.ts ***!
      \***************************************/

    /*! exports provided: MusicDataService */

    /***/
    function aIDz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MusicDataService", function () {
        return MusicDataService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _spotify_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spotify-token.service */
      "VyY6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MusicDataService = /*#__PURE__*/function () {
        function MusicDataService(spotifyToken, http) {
          _classCallCheck(this, MusicDataService);

          this.spotifyToken = spotifyToken;
          this.http = http;
          this.favouritesList = [];
        }

        _createClass(MusicDataService, [{
          key: "getNewReleases",
          value: function getNewReleases() {
            var _this8 = this;

            return this.spotifyToken.getBearerToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
              return _this8.http.get('https://api.spotify.com/v1/browse/new-releases', {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }));
          }
        }, {
          key: "getArtistById",
          value: function getArtistById(id) {
            var _this9 = this;

            return this.spotifyToken.getBearerToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
              return _this9.http.get("https://api.spotify.com/v1/artists/".concat(id), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }));
          }
        }, {
          key: "getAlbumsByArtistId",
          value: function getAlbumsByArtistId(id) {
            var _this10 = this;

            return this.spotifyToken.getBearerToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
              return _this10.http.get("https://api.spotify.com/v1/artists/".concat(id, "/albums?include_groups=album,single&limit=50"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            })); // return this.http.get<any>(
            //   `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`
            // );
          }
        }, {
          key: "getAlbumById",
          value: function getAlbumById(id) {
            var _this11 = this;

            return this.spotifyToken.getBearerToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
              return _this11.http.get("https://api.spotify.com/v1/albums/".concat(id), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            })); // return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`);
          }
        }, {
          key: "searchArtists",
          value: function searchArtists(searchString) {
            var _this12 = this;

            return this.spotifyToken.getBearerToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
              return _this12.http.get("https://api.spotify.com/v1/search/?q=".concat(searchString, "&type=artist&limit=50"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            })); // return this.http.get<any>(
            //   `https://api.spotify.com/v1/search/?q=${searchString}&type=artist&limit=50`
            // );
          }
        }, {
          key: "addToFavourites",
          value: function addToFavourites(id) {
            if (id == null || !id || this.favouritesList.length >= 50) {
              return false;
            }

            this.favouritesList.push(id);
            return true;
          }
        }, {
          key: "removeFromFavourites",
          value: function removeFromFavourites(id) {
            var i = this.favouritesList.indexOf(id);
            this.favouritesList.splice(i, 1);
            return this.getFavourites();
          }
        }, {
          key: "getFavourites",
          value: function getFavourites() {
            var _this13 = this;

            var arr = this.favouritesList.join();

            if (this.favouritesList.length > 0) {
              return this.spotifyToken.getBearerToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
                return _this13.http.get("https://api.spotify.com/v1/tracks?ids=".concat(arr), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });
              })); //return this.http.get<any>(`https://api.spotify.com/v1/tracks?ids=${arr}`);
            } else if (this.favouritesList.length <= 0) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (o) {
                o.next([]);
              });
            }
          }
        }]);

        return MusicDataService;
      }();

      MusicDataService.ɵfac = function MusicDataService_Factory(t) {
        return new (t || MusicDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_spotify_token_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      MusicDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MusicDataService,
        factory: MusicDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "gq2R":
    /*!******************************************!*\
      !*** ./src/app/album/album.component.ts ***!
      \******************************************/

    /*! exports provided: AlbumComponent */

    /***/
    function gq2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlbumComponent", function () {
        return AlbumComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _music_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../music-data.service */
      "aIDz");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = function _c0(a1) {
        return ["/artist", a1];
      };

      function AlbumComponent_mat_chip_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artist_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, artist_r3.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r3.name);
        }
      }

      function AlbumComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var copyright_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", copyright_r4.text, " ");
        }
      }

      function AlbumComponent_mat_list_item_45_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "audio", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var track_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", track_r5.preview_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AlbumComponent_mat_list_item_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_mat_list_item_45_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var track_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.addToFavourites(track_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "queue_music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlbumComponent_mat_list_item_45_div_7_Template, 3, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var track_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", track_r5.track_number, ": ", track_r5.name, " - ", (track_r5.duration_ms / 60000).toFixed(2), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", track_r5.preview_url);
        }
      }

      var AlbumComponent = /*#__PURE__*/function () {
        function AlbumComponent(route, dataService, snackbar) {
          _classCallCheck(this, AlbumComponent);

          this.route = route;
          this.dataService = dataService;
          this.snackbar = snackbar;
        }

        _createClass(AlbumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.routeSub = this.route.params.subscribe(function (params) {
              _this14.albumSub = _this14.dataService.getAlbumById(params.id).subscribe(function (data) {
                _this14.album = data;
              });
            });
          }
        }, {
          key: "addToFavourites",
          value: function addToFavourites(trackId) {
            var result = this.dataService.addToFavourites(trackId);

            if (result) {
              this.snackbar.open('Adding to Favourites...', 'Done', {
                duration: 1500
              }); //console.log(trackId);
            }
          }
        }]);

        return AlbumComponent;
      }();

      AlbumComponent.ɵfac = function AlbumComponent_Factory(t) {
        return new (t || AlbumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_music_data_service__WEBPACK_IMPORTED_MODULE_2__["MusicDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      AlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlbumComponent,
        selectors: [["app-album"]],
        decls: 46,
        vars: 18,
        consts: [["mat-list-icon", ""], ["fxLayout", "row wrap", "fxLayout.xs", "column"], ["fxflex", ""], ["alt", "album cover", 3, "src"], ["fxFlex", ""], ["aria-label", "Artist selection"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"], ["mat-list-icon", "", 3, "click"], ["mat-line", ""], [4, "ngIf"], ["controls", "", 3, "src"]],
        template: function AlbumComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nClick the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "queue_music");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " icon to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " a song from your favourites list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Record Label: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Release Date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tracks:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Popularity: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-chip-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AlbumComponent_mat_chip_37_Template, 2, 4, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AlbumComponent_div_39_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Track Listing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AlbumComponent_mat_list_item_45_Template, 8, 4, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.album.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Full track listing for ", ctx.album.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "10px")("max-width", "90%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.album.images[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", "300px")("margin", "10px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.album.label, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.album.release_date, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.album.total_tracks, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.album.popularity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.album.artists);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.album.copyrights);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.album.tracks.items);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListIconCssMatStyler"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
        styles: [".mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{ cursor: pointer; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDLGVBQWUsRUFBRSIsImZpbGUiOiJhbGJ1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWl0ZW0gLm1hdC1pY29uOmhvdmVyeyBjdXJzb3I6IHBvaW50ZXI7IH0iXX0= */"]
      });
      /***/
    },

    /***/
    "nod/":
    /*!**************************************************!*\
      !*** ./src/app/not-found/not-found.component.ts ***!
      \**************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function nod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 4,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is the \"404 Page\" of the application.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _album_album_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./album/album.component */
      "gq2R");
      /* harmony import */


      var _artist_discography_artist_discography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./artist-discography/artist-discography.component */
      "27G8");
      /* harmony import */


      var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./favourites/favourites.component */
      "S9x4");
      /* harmony import */


      var _new_releases_new_releases_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-releases/new-releases.component */
      "Pnbb");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "nod/");
      /* harmony import */


      var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search-result/search-result.component */
      "AvlM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "newReleases",
        component: _new_releases_new_releases_component__WEBPACK_IMPORTED_MODULE_5__["NewReleasesComponent"]
      }, {
        path: "artist/:id",
        component: _artist_discography_artist_discography_component__WEBPACK_IMPORTED_MODULE_3__["ArtistDiscographyComponent"]
      }, {
        path: "album/:id",
        component: _album_album_component__WEBPACK_IMPORTED_MODULE_2__["AlbumComponent"]
      }, {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
      }, {
        path: "search",
        component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"]
      }, {
        path: "favourites",
        component: _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"]
      }, {
        path: "",
        redirectTo: "/newReleases",
        pathMatch: "full"
      }, {
        path: "**",
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map